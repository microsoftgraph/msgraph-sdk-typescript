import {AlertFeedback} from './alertFeedback';
import {AlertStatus} from './alertStatus';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AlertHistoryState extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The appId property
     */
    appId?: string | undefined;
    /**
     * The assignedTo property
     */
    assignedTo?: string | undefined;
    /**
     * The comments property
     */
    comments?: string[] | undefined;
    /**
     * The feedback property
     */
    feedback?: AlertFeedback | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The status property
     */
    status?: AlertStatus | undefined;
    /**
     * The updatedDateTime property
     */
    updatedDateTime?: Date | undefined;
    /**
     * The user property
     */
    user?: string | undefined;
}
