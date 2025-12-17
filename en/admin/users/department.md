# Department Management

Register and manage departments (organization).

::: warning Admin Only
This menu requires **USER:MANAGE** permission.
:::

## Organization Chart

### Organization Structure

View organization structure in tree format.

```
Company
├── Management Support
├── Development
│   ├── Frontend
│   └── Backend
├── Sales
└── ...
```

### Select Department

Click a department in the org chart to view details and members.

## Add Department

### Add Method

1. Select parent department (or add at top level)
2. Click **Add Department** button
3. Enter department information
4. Click **Save** button

### Input Fields

| Field | Required | Description |
|-------|:--------:|-------------|
| Department Name | O | Department name |
| Department Code | O | Unique department code |
| Parent Department | - | Parent department (if not top-level) |
| Sort Order | - | Display order in org chart |

## Edit Department

### Edit Information

1. Select department to edit
2. Click **Edit** button
3. Modify information and **Save**

### Change Parent

Change parent department to restructure organization.

::: warning Including Subdepartments
When changing parent, subdepartments move together.
:::

## Delete Department

### Delete Conditions

Department can only be deleted if:

- No members in the department
- No subdepartments

### Delete Method

1. Select department to delete
2. Click **Delete** button
3. Confirm deletion

## Department Members

### View Members

Select a department to view its members.

| Item | Description |
|------|-------------|
| Name | User name |
| Position | Job position |
| Phone | Phone number |
| Email | Email address |

### Transfer User

Change user's department.

1. Select user to transfer
2. Click **Transfer** button
3. Select target department
4. Click **Confirm**

