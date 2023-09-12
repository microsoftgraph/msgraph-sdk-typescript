import { type Compliance } from './compliance';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCompliance(writer: SerializationWriter, compliance: Compliance | undefined = {} as Compliance) : void {
        writer.writeStringValue("@odata.type", compliance.odataType);
        writer.writeAdditionalData(compliance.additionalData);
}
