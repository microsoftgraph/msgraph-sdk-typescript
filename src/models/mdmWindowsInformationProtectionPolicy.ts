import {WindowsInformationProtection} from './windowsInformationProtection';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MdmWindowsInformationProtectionPolicy extends Partial<AdditionalDataHolder>, Partial<Parsable>, WindowsInformationProtection {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
