import { type LicenseProcessingState } from './licenseProcessingState';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoLicenseProcessingState(licenseProcessingState: LicenseProcessingState | undefined = {} as LicenseProcessingState) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { licenseProcessingState.odataType = n.getStringValue(); },
        "state": n => { licenseProcessingState.state = n.getStringValue(); },
    }
}
