import {SystemFacet} from './systemFacet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSystemFacet(systemFacet: SystemFacet | undefined = {} as SystemFacet) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { systemFacet.odataType = n.getStringValue(); },
    }
}
