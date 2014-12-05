// Acl classification sections and actions

ACL_SECTIONS = {
    "administrator": "Administrators",
    "config": "Configuration",
    "di": "Disk images",
    "host": "Nodes",
    "osf": "OS Flavours",
    "role": "Roles",
    "tenant": "Tenants",
    "user": "Users",
    "views": "Views",
    "vm": "Virtual machines"
};

ACL_SECTIONS_PATTERNS = {
    "administrator": "administrator.%",
    "config": "config.%",
    "di": "di.%",
    "host": "host.%",
    "osf": "osf.%",
    "role": "role.%",
    "tenant": "tenant.%",
    "user": "user.%",
    "views": "views.%",
    "vm": "vm.%"
};

ACL_ACTIONS = {
    "create": "Create",
    "delete": "Delete one by one",
    "delete-massive": "Delete massively",
    "see": "See",
    "see-details": "See details view",
    "see-main": "See main section",
    "update": "Update one by one",
    "update-massive": "Update massively",
    "filter": "Filters",
    "stats": "Statistics"
}

ACL_ACTIONS_PATTERNS = {
    "create": "%.create.%",
    "delete": "%.delete.%",
    "delete-massive": "%.delete-massive.%",
    "see": "%.see.%",
    "see-details": "%.see-details.%",
    "see-main": "%.see-main.%",
    "update": "%.update.%",
    "update-massive": "%.update-massive.%",
    "filter": "%.filter.%",
    "stats": "%.stats.%"
}

ACLS = {
    "administrator.create.": "Create administrators",
    "administrator.delete-massive.": "Delete administrators",
    "administrator.delete.": "Delete administrators (massive)",
    "administrator.filter.name": "Filter administrator by host",
    "administrator.see-details.": "Access to administrator's details view",
    "administrator.see-main.": "Access to administrator's main section",
    "administrator.see.acl-list": "See administrator's ACLs",
    "administrator.see.acl-list-roles": "Source roles of Administrator's ACL",
    "administrator.see.id": "See administrator's ID",
    "administrator.see.roles": "See administrator's Roles",
    "administrator.update.assign-role": "Assign-Unassign administrator's roles",
    "administrator.update.password": "Change administrator's password",
    "config.see-main.": "QVD's configuration main section",
    "config.update.": "QVD's configuration management",
    "di.create.": "Create disk images",
    "di.create.default": "Set disk images as default in creation",
    "di.create.properties": "Set properties on disk images in creation",
    "di.create.tags": "Set tags on disk images in creation",
    "di.create.version": "Set version on disk images in creation",
    "di.delete-massive.": "Delete disk images (massive)",
    "di.delete.": "Delete disk images",
    "di.filter.block": "Filter disk images by blocking state",
    "di.filter.disk-image": "Filter disk images by DI's name",
    "di.filter.osf": "Filter disk images by OS Flavour",
    "di.filter.properties": "Filter disk images by properties",
    "di.see-details.": "Access to disk image's details view",
    "di.see-main.": "Access to disk image's main section",
    "di.see.block": "See disk image's blocking state",
    "di.see.created-by": "See disk image's creator",
    "di.see.creation-date": "See disk image's creation date",
    "di.see.default": "See OSF's default disk image",
    "di.see.head": "See OSF's last created disk image",
    "di.see.id": "See disk image's ID",
    "di.see.osf": "See disk image's OS Flavour",
    "di.see.properties": "See disk image's properties",
    "di.see.tags": "See disk image's tags",
    "di.see.version": "See disk image's version",
    "di.see.vm-list": "See disk image's list of virtual machines",
    "di.see.vm-list-block": "See blocking state of VM's list of DI's",
    "di.see.vm-list-expiration": "See expiration of VM's list of DI's",
    "di.see.vm-list-state": "See running state of VM's list of DI's",
    "di.see.vm-list-user-state": "See user state of VM's list of DI's",
    "di.stats.blocked": "See statistics of number of blocked disk images",
    "di.stats.summary": "See statistics of number of disk images",
    "di.update-massive.block": "Block-Unblock disk images (massive)",
    "di.update-massive.properties-create": "Create properties when update disk images (massive)",
    "di.update-massive.properties-delete": "Delete properties when update disk images (massive)",
    "di.update-massive.properties-update": "Change properties when update disk images (massive)",
    "di.update-massive.tags": "Update disk image's tags (massive)",
    "di.update.block": "Block-Unblock disk images",
    "di.update.default": "Set disk images as default",
    "di.update.properties-create": "Create properties when update disk images",
    "di.update.properties-delete": "Delete properties when update disk images",
    "di.update.properties-update": "Change properties when update disk images",
    "di.update.tags": "Update disk image's tags",
    "host.create.": "Create nodes",
    "host.create.properties": "Set properties on nodes in creation",
    "host.delete-massive.": "Delete nodes (massive)",
    "host.delete.": "Delete nodes",
    "host.filter.block": "Filter nodes by blocking state",
    "host.filter.name": "Filter nodes by name",
    "host.filter.properties": "Filter nodes by properties",
    "host.filter.vm": "Filter nodes by virtual machines",
    "host.see-details.": "Access to node's details view",
    "host.see-main.": "Access to node's main section",
    "host.see.address": "See node's IP address",
    "host.see.block": "See node's blocking state",
    "host.see.created-by": "See node's creator",
    "host.see.creation-date": "See node's creation date",
    "host.see.id": "See node's ID",
    "host.see.properties": "See node's properties",
    "host.see.state": "See node's running state",
    "host.see.vm-list": "See node's running virtual machines",
    "host.see.vm-list-block": "See node's running virtual machines' blocking state",
    "host.see.vm-list-expiration": "See node's running virtual machines' expiration",
    "host.see.vm-list-state": "See node's running virtual machines' running state",
    "host.see.vm-list-user-state": "See node's running virtual machine' user state",
    "host.see.vms-info": "See number of running vms running on hosts",
    "host.stats.blocked": "See statistics of number of blocked hosts",
    "host.stats.running-hosts": "See statistics of running hosts",
    "host.stats.summary": "See statistics of number of hosts",
    "host.stats.top-hosts-most-vms": "See statistics of hosts with most running Vms",
    "host.update-massive.block": "Block-Unblock nodes (massive)",
    "host.update-massive.properties-create": "Create properties when update nodes (massive)",
    "host.update-massive.properties-delete": "Delete properties when update nodes (massive)",
    "host.update-massive.properties-update": "Change properties when update nodes (massive)",
    "host.update-massive.stop-vms": "Stop all virtual machines of a node (massive)",
    "host.update.address": "Update node's address",
    "host.update.block": "Block-Unblock nodes",
    "host.update.name": "Update node's name",
    "host.update.properties-create": "Create properties when update nodes",
    "host.update.properties-delete": "Delete properties when update nodes",
    "host.update.properties-update": "Change properties when update nodes",
    "host.update.stop-vms": "Stop all virtual machines of a node",
    "osf.create.": "Create OS Flavours",
    "osf.create.memory": "Set memory in OS Flavour's creation",
    "osf.create.properties": "Set properties in OS Flavour's creation",
    "osf.create.user-storage": "Set user storage in OS Flavour's creation",
    "osf.delete-massive.": "Delete OS Flavours (massive)",
    "osf.delete.": "Delete OS Flavours",
    "osf.filter.di": "Filter OS Flavours by disk image",
    "osf.filter.name": "Filter OS Flavours by name",
    "osf.filter.properties": "Filter OS Flavours by properties",
    "osf.filter.vm": "Filter OS Flavours by virtual machine",
    "osf.see-details.": "Access to OS Flavour's details view",
    "osf.see-main.": "Access to OS Flavour's main section",
    "osf.see.created-by": "See OS Flavour's creator",
    "osf.see.creation-date": "See OS Flavour's creation date",
    "osf.see.di-list": "See OS Flavour's disk images",
    "osf.see.di-list-block": "See OS Flavour's disk blocking state",
    "osf.see.di-list-default": "See OS Flavour's disk images' default state",
    "osf.see.di-list-default-update": "Change OS Flavour's disk images' default info",
    "osf.see.di-list-head": "See OS Flavour's disk images' head info",
    "osf.see.di-list-tags": "See OS Flavour's disk images' tags",
    "osf.see.dis-info": "See number of OS Flavour's disk images",
    "osf.see.id": "See node's ID",
    "osf.see.memory": "See node's memory",
    "osf.see.overlay": "See node's overlay",
    "osf.see.properties": "See node's properties",
    "osf.see.user-storage": "See node's user storage",
    "osf.see.vm-list": "See OS Flavour's virtual machines",
    "osf.see.vm-list-block": "See OS Flavour's virtual machines' blocking state",
    "osf.see.vm-list-default": "See OS Flavour's virtual machines' default state",
    "osf.see.vm-list-default-update": "Change OS Flavour's virtual machines' default info",
    "osf.see.vm-list-expiration": "See OS Flavour's virtual machines' expiration",
    "osf.see.vm-list-head": "Change OS Flavour's virtual machines' head info",
    "osf.see.vm-list-state": "Start-Stop OS Flavour's virtual machines",
    "osf.see.vm-list-tags": "Change OS Flavour's virtual machines' tags",
    "osf.see.vm-list-user-state": "See OS Flavour's virtual machines' user state",
    "osf.see.vms-info": "See number of OS Flavour's virtual machines",
    "osf.stats.summary": "See statistics of number of OS Flavours",
    "osf.update-massive.memory": "Update OS Flavour's memory (massive)",
    "osf.update-massive.properties-create": "Create properties when update OS Flavours (massive)",
    "osf.update-massive.properties-delete": "Delete properties when update OS Flavours (massive)",
    "osf.update-massive.properties-update": "Change properties when update OS Flavours (massive)",
    "osf.update-massive.user-storage": "Update OS Flavour's user storage (massive)",
    "osf.update.memory": "Update OS Flavour's memory",
    "osf.update.name": "Update OS Flavour's name",
    "osf.update.properties-create": "Create properties when update OS Flavours",
    "osf.update.properties-delete": "Delete properties when update OS Flavours",
    "osf.update.properties-update": "Change properties when update OS Flavours",
    "osf.update.user-storage": "Update OS Flavour's user storage",
    "role.create.": "Create roles",
    "role.delete-massive.": "Delete roles (massive)",
    "role.delete.": "Delete roles",
    "role.filter.name": "Filter role by host",
    "role.see-details.": "Access to role's details view",
    "role.see-main.": "Access to role's main section",
    "role.see.acl-list": "See role's acls",
    "role.see.acl-list-roles": "See role's acls' origin roles",
    "role.see.id": "See role's ID",
    "role.see.inherited-roles": "See role's inherited roles",
    "role.update.assign-acl": "Assign-Unassign role's ACLs",
    "role.update.assign-role": "Assign-Unassign role's inherited roles",
    "role.update.name": "Update role's name",
    "tenant.create.": "Create tenants",
    "tenant.delete-massive.": "Delete tenants (massive)",
    "tenant.delete.": "Delete tenants",
    "tenant.filter.name": "Filter tenant by host",
    "tenant.see-main.": "Access to tenant's main section",
    "tenant.see.id": "See tenant's ID",
    "user.create.": "Create users",
    "user.create.properties": "Set properties on users in creation",
    "user.delete-massive.": "Delete users (massive)",
    "user.delete.": "Delete users",
    "user.filter.block": "Filter users by blocking state",
    "user.filter.name": "Filter users by name",
    "user.filter.properties": "Filter users by properties",
    "user.see-details.": "Access to user's details view",
    "user.see-main.": "Access to user's main section",
    "user.see.block": "See user's blocking state",
    "user.see.created-by": "See user's creator",
    "user.see.creation-date": "See user's creation date",
    "user.see.id": "See user's ID",
    "user.see.properties": "See user's properties",
    "user.see.vm-list": "See user's virtual machines",
    "user.see.vm-list-block": "See user's virtual machines' blocking state",
    "user.see.vm-list-expiration": "See user's virtual machines' expiration",
    "user.see.vm-list-state": "See user's virtual machines' running state",
    "user.see.vm-list-user-state": "See user's virtual machines' user state",
    "user.see.vms-info": "See number of user's virtual machines",
    "user.stats.blocked": "See statistics of number of users",
    "user.stats.summary": "See statistics of number of blocked users",
    "user.update-massive.block": "Block-Unblock users (massive)",
    "user.update-massive.properties-create": "Create properties when update users (massive)",
    "user.update-massive.properties-delete": "Delete properties when update users (massive)",
    "user.update-massive.properties-update": "Change properties when update users (massive)",
    "user.update.block": "Block-Unblock users",
    "user.update.password": "Update user's password",
    "user.update.properties-create": "Create properties when update users",
    "user.update.properties-delete": "Delete properties when update users",
    "user.update.properties-update": "Change properties when update users",
    "views.see-main.": "Access to default view's main section",
    "views.update.columns": "Set default columns on list views",
    "views.update.filters-desktop": "Set default filters on list views for desktop",
    "views.update.filters-mobile": "Set default filters on list views for mobile",
    "vm.create.": "Create virtual machines",
    "vm.create.di-tag": "Set tag in virtual macine's creation",
    "vm.create.properties": "Set properties in virtual machine's creation",
    "vm.delete-massive.": "Delete virtual machines (massive)",
    "vm.delete.": "Delete virtual machines",
    "vm.filter.block": "Filter virtual machines by blocking state",
    "vm.filter.host": "Filter virtual machines by host",
    "vm.filter.name": "Filter virtual machines by name",
    "vm.filter.osf": "Filter virtual machines by OS Flavour",
    "vm.filter.properties": "Filter virtual machines by properties",
    "vm.filter.state": "Filter virtual machines by running state",
    "vm.filter.user": "Filter virtual machines by user",
    "vm.see-details.": "Access to virtual machine's details view",
    "vm.see-main.": "Access to virtual machine's main section",
    "vm.see.block": "See virtual machine's blocking status",
    "vm.see.created-by": "See virtual machine's creator",
    "vm.see.creation-date": "See virtual machine's creation date",
    "vm.see.di": "See virtual machine's disk image",
    "vm.see.di-tag": "See virtual machine's disk image's tag",
    "vm.see.di-version": "See virtual machine's disk image's version",
    "vm.see.expiration": "See virtual machine's Expiration",
    "vm.see.host": "See virtual machine's Node",
    "vm.see.id": "See virtual machine's ID",
    "vm.see.ip": "See virtual machine's IP address",
    "vm.see.mac": "See virtual machine's MAC address",
    "vm.see.next-boot-ip": "See virtual machine's IP address for next boot",
    "vm.see.osf": "See virtual machine's OS Flavour",
    "vm.see.port-serial": "See virtual machine's Serial port",
    "vm.see.port-ssh": "See virtual machine's SSH port",
    "vm.see.port-vnc": "See virtual machine's VNC port",
    "vm.see.properties": "See virtual machine's properties",
    "vm.see.state": "See virtual machine's state",
    "vm.see.user": "See virtual machine's user",
    "vm.see.user-state": "See virtual machine's user's connection state",
    "vm.stats.blocked": "See statistics of number of blocked virtual machines",
    "vm.stats.close-to-expire": "See statistics of virtual machines close to expire",
    "vm.stats.running-vms": "See statistics of running virtual machines",
    "vm.stats.summary": "See statistics of number of virtual machines",
    "vm.update-massive.block": "Block-Unblock virtual machines (massive)",
    "vm.update-massive.di-tag": "Update virtual machine's tags (massive)",
    "vm.update-massive.disconnect-user": "Disconnect user from virtual machine (massive)",
    "vm.update-massive.expiration": "Update virtual machine's expiration (massive)",
    "vm.update-massive.properties-create": "Create properties when update virtual machines (massive)",
    "vm.update-massive.properties-delete": "Delete properties when update virtual machines (massive)",
    "vm.update-massive.properties-update": "Change properties when update virtual machines (massive)",
    "vm.update-massive.state": "Start-Stop virtual machines (massive)",
    "vm.update.block": "Block-Unblock virtual machines",
    "vm.update.di-tag": "Update virtual machine's tags",
    "vm.update.disconnect-user": "Disconnect user from virtual machine",
    "vm.update.expiration": "Update virtual machine's expiration",
    "vm.update.name": "Update virtual machine's name",
    "vm.update.properties-create": "Create properties when update virtual machines",
    "vm.update.properties-delete": "Delete properties when update virtual machines",
    "vm.update.properties-update": "Change properties when update virtual machines",
    "vm.update.state": "Start-Stop virtual machines"
}