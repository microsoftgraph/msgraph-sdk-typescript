import {ResourceAccess} from './resourceAccess';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Guid} from 'guid-typescript';

export function deserializeIntoResourceAccess(resourceAccess: ResourceAccess | undefined = {} as ResourceAccess) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { resourceAccess.id = n.getGuidValue(); },
        "@odata.type": n => { resourceAccess.odataType = n.getStringValue(); },
        "type": n => { resourceAccess.type = n.getStringValue(); },
    }
}
