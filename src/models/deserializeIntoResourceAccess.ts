import { type ResourceAccess } from './resourceAccess';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';
import { Guid } from 'guid-typescript';

export function deserializeIntoResourceAccess(resourceAccess: ResourceAccess | undefined = {} as ResourceAccess) : Record<string, (node: ParseNode) => void> {
    return {
        "id": n => { resourceAccess.id = n.getGuidValue(); },
        "@odata.type": n => { resourceAccess.odataType = n.getStringValue(); },
        "type": n => { resourceAccess.type = n.getStringValue(); },
    }
}
