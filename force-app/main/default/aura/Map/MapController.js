({
    init: function (cmp, event, helper) {
        var action = cmp.get("c.getPos")
        var list = []
        action.setCallback(this, function(data) {
        data.getReturnValue().forEach(conf =>{    
            var luogo = conf.Luogo__r
                var location_street = luogo.Indirizzo__c
                var location_city = luogo.City__c
                var location_state = luogo.Stato__c
				var title = luogo.Name

            list.push(
            {
                location: {
                    Street: location_street,
                    City: location_city,
                    State: location_state
                },

                title: title,
                description: ''
           
              })
        }) 
        cmp.set("v.mapMarkers", list)
    })
    $A.enqueueAction(action);
    
    cmp.set('v.zoomLevel', 16);
}
})