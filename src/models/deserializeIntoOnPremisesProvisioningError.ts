import {OnPremisesProvisioningError} from './onPremisesProvisioningError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnPremisesProvisioningError(onPremisesProvisioningError: OnPremisesProvisioningError | undefined = {} as OnPremisesProvisioningError) : Record<string, (node: ParseNode) => void> {
    return {
        "category": n => { onPremisesProvisioningError.category = n.getStringValue(); },
        "occurredDateTime": n => { onPremisesProvisioningError.occurredDateTime = n.getDateValue(); },
        "@odata.type": n => { onPremisesProvisioningError.odataType = n.getStringValue(); },
        "propertyCausingError": n => { onPremisesProvisioningError.propertyCausingError = n.getStringValue(); },
        "value": n => { onPremisesProvisioningError.value = n.getStringValue(); },
    }
}
