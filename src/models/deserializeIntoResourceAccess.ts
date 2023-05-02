import {ResourceAccess} from './resourceAccess';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceAccess(resourceAccess: ResourceAccess | undefined = {} as ResourceAccess) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { resourceAccess.id = n.getStringValue(); },
        "@odata.type": n => { resourceAccess.odataType = n.getStringValue(); },
        "type": n => { resourceAccess.type = n.getStringValue(); },
    }
}
