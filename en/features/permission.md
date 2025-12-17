# Permission Management

Manage menu and feature permissions through Role-Based Access Control (RBAC).

## Permission Overview

POREST manages permissions using Role-Based Access Control (RBAC).

### Default Roles

| Role | Description |
|------|------|
| User | Basic feature access |
| Team Leader | Team management, approval authority |
| Department Head | Department management, final approval |
| Administrator | Full system management |

## Menu Access by Role

### User

- Home (Dashboard, Calendar)
- Schedule Management (Own)
- Vacation Management (Own)
- Electronic Approval (Request)

### Team Leader

User permissions +
- Schedule Management (Team)
- Vacation Management (Team view)
- Electronic Approval (Approve)

### Administrator

All menu access +
- User Management
- Department Management
- Vacation Grant/Management
- Permission Settings

## Permission Settings (Admin)

### Grant User Permissions

1. Click **Admin** > **Permission Management** menu
2. Search for user
3. Check/uncheck permission items
4. **Save**

### Detailed Permissions

Grant granular permissions by menu and feature.

| Permission | Description |
|------|------|
| View | Can only view data |
| Create | Can create new data |
| Edit | Can modify existing data |
| Delete | Can delete data |

::: warning Permission Change Caution
When permissions are changed, the user's accessible menus and features are immediately updated.
:::

## Dynamic Screen Control

Menus and buttons displayed on screen are dynamically controlled based on user permissions.

- Menus without access permission are not shown in the sidebar
- Buttons for edit/delete are disabled without corresponding permissions
