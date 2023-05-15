import {OnPremisesProvisioningError} from './onPremisesProvisioningError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnPremisesProvisioningError(writer: SerializationWriter, onPremisesProvisioningError: OnPremisesProvisioningError | undefined = {} as OnPremisesProvisioningError) : void {
        writer.writeStringValue("category", onPremisesProvisioningError.category);
        writer.writeDateValue("occurredDateTime", onPremisesProvisioningError.occurredDateTime);
        writer.writeStringValue("@odata.type", onPremisesProvisioningError.odataType);
        writer.writeStringValue("propertyCausingError", onPremisesProvisioningError.propertyCausingError);
        writer.writeStringValue("value", onPremisesProvisioningError.value);
        writer.writeAdditionalData(onPremisesProvisioningError.additionalData);
}
