import {LicenseProcessingState} from './licenseProcessingState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLicenseProcessingState(writer: SerializationWriter, licenseProcessingState: LicenseProcessingState | undefined = {} as LicenseProcessingState) : void {
        writer.writeStringValue("@odata.type", licenseProcessingState.odataType);
        writer.writeStringValue("state", licenseProcessingState.state);
        writer.writeAdditionalData(licenseProcessingState.additionalData);
}
