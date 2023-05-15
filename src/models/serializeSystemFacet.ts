import {SystemFacet} from './systemFacet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSystemFacet(writer: SerializationWriter, systemFacet: SystemFacet | undefined = {} as SystemFacet) : void {
        writer.writeStringValue("@odata.type", systemFacet.odataType);
        writer.writeAdditionalData(systemFacet.additionalData);
}
