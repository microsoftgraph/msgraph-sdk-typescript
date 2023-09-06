import { type SystemFacet } from './systemFacet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSystemFacet(systemFacet: SystemFacet | undefined = {} as SystemFacet) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { systemFacet.odataType = n.getStringValue(); },
    }
}
