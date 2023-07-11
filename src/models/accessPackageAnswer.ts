import {AccessPackageQuestion} from './accessPackageQuestion';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AccessPackageAnswer extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The answeredQuestion property
     */
    answeredQuestion?: AccessPackageQuestion | undefined;
    /**
     * The localized display value shown to the requestor and approvers.
     */
    displayValue?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
