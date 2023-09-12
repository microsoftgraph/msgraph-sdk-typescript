import { type LicenseProcessingState } from './licenseProcessingState';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeLicenseProcessingState(writer: SerializationWriter, licenseProcessingState: LicenseProcessingState | undefined = {} as LicenseProcessingState) : void {
        writer.writeStringValue("@odata.type", licenseProcessingState.odataType);
        writer.writeStringValue("state", licenseProcessingState.state);
        writer.writeAdditionalData(licenseProcessingState.additionalData);
}
