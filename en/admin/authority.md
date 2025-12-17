# Permission Settings

Configure user roles and permissions.

::: warning Admin Only
This menu requires **ROLE:MANAGE** permission.
:::

## Role Management

### Role List

View registered roles.

| Item | Description |
|------|-------------|
| Role Name | Role name |
| Description | Role description |
| Users | Number of users with this role |

### Default Roles

System-provided default roles.

| Role | Description |
|------|-------------|
| User | Basic functionality access |
| Team Lead | Team management, approval authority |
| Admin | Full system administration |

## Add Role

### Add Method

1. Click **Add Role** button
2. Enter role information
   - Role name
   - Description
3. Select permissions
4. Click **Save** button

## Permission Settings

### Permission List

Permissions that can be assigned to roles.

| Permission | Description |
|------------|-------------|
| VACATION:READ | View leave |
| VACATION:REQUEST | Request leave |
| VACATION:APPROVE | Approve leave |
| VACATION:MANAGE | Manage leave |
| USER:MANAGE | Manage users |
| COMPANY:MANAGE | Manage company |
| ROLE:MANAGE | Manage permissions |
| NOTICE:READ | View notices |
| NOTICE:MANAGE | Manage notices |
| WORK:READ | View work |
| WORK:MANAGE | Manage work |
| HOLIDAY:MANAGE | Manage holidays |
| DUES:READ | View dues |
| REGULATION:READ | View regulations |

### Assign Permissions

Assign permissions to roles.

1. Select role
2. Check permissions to grant
3. Click **Save** button

## User Role Assignment

### Assignment Method

Assign roles to users.

1. Search/select user
2. Select role to assign
3. Click **Save** button

### Multiple Roles

Users can have multiple roles.
They will have all permissions from assigned roles.

::: info Permission Application
When roles change, user's accessible menus update immediately.
:::

