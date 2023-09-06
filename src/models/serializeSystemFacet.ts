import { type SystemFacet } from './systemFacet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSystemFacet(writer: SerializationWriter, systemFacet: SystemFacet | undefined = {} as SystemFacet) : void {
        writer.writeStringValue("@odata.type", systemFacet.odataType);
        writer.writeAdditionalData(systemFacet.additionalData);
}
