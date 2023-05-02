import {ResourceAction} from './resourceAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceAction(resourceAction: ResourceAction | undefined = {} as ResourceAction) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedResourceActions": n => { resourceAction.allowedResourceActions = n.getCollectionOfPrimitiveValues<string>(); },
        "notAllowedResourceActions": n => { resourceAction.notAllowedResourceActions = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { resourceAction.odataType = n.getStringValue(); },
    }
}
