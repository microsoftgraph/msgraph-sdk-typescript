import {LicenseProcessingState} from './licenseProcessingState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLicenseProcessingState(licenseProcessingState: LicenseProcessingState | undefined = {} as LicenseProcessingState, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", licenseProcessingState.odataType);
        writer.writeStringValue("state", licenseProcessingState.state);
        writer.writeAdditionalData(licenseProcessingState.additionalData);
}
