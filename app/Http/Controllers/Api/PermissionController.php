<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Permission; 

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $permission = Permission::get();
        return  response()->json($permission, 200);
    }

    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {  
        $permissions = Permission::get();
        if ($request->permission_type == 'crud') {
            if (Permission::where('per_table', '=', $request->table)->exists()) {  
                 return response()->json(['errors' => 'Yup. You Have already created permission on this table!'], 409);
            } else { 
                $crud = $request->permission;
                if (count($crud) > 0) {
                    foreach ($crud as $x) {
                        $slug = strtolower($x) . '-' . strtolower($request->table_name);
                        $display_name = ucwords($x . " " . $request->table_name);
                        $description = "Allows a user to " . strtoupper($x) . ' a ' . ucwords($request->table_name);
                        foreach ($permissions as $permission) {
                            if ($permission->name == $slug) {
                                return response()->json(['errors' => 'Yup. You Have already created permission in this Name!'], 409);
                            }
                        }
                        $permission = new Permission();
                        $permission->name = $slug;
                        $permission->display_name = $display_name;
                        $permission->description = $description;
                        $permission->per_table = $request->table;
                        $permission->save();
                    }  
                    return response()->json(['success' => 'Permission Created Successfully'], 201); 
                }
            }
        }else{ 
            foreach ($permissions as $permission) { 
                if ($permission->name == $request->slug) {
                    return response()->json(['errors' => 'Yup. You Have already created permission in this Name!'], 409);
                }
            } 
            $permission = new Permission();
            $permission->name = $request->slug;
            $permission->display_name = $request->name;
            $permission->description = $request->description;
            $permission->per_table = $request->table;
            $permission->save();
            
            return response()->json(['success' => 'Permission Created Successfully'], 201); 
             
        } 
    } 
    

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $permission = Permission::where('id', $id)->first();;
        
        return  response()->json($permission, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $permission = Permission::where('id', $id)->first();;
        
        return  response()->json($permission, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    { 
        $permission = Permission::findOrFail($id);
        $permission->display_name = $request->name;
        $permission->description = $request->description;
        $permission->save();
  
        return response()->json(['success' => 'Permission Updated Successfully'], 200); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    { 
        $permission = Permission::find($id);
        if ($permission) {
            $permission->delete();
            return response()->json([
                'success' => 'Permission Delete Successfully',
                'id' => $id
            ], 200); 
        }
    }
}
