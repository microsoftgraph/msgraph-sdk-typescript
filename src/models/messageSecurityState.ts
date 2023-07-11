import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MessageSecurityState extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The connectingIP property
     */
    connectingIP?: string | undefined;
    /**
     * The deliveryAction property
     */
    deliveryAction?: string | undefined;
    /**
     * The deliveryLocation property
     */
    deliveryLocation?: string | undefined;
    /**
     * The directionality property
     */
    directionality?: string | undefined;
    /**
     * The internetMessageId property
     */
    internetMessageId?: string | undefined;
    /**
     * The messageFingerprint property
     */
    messageFingerprint?: string | undefined;
    /**
     * The messageReceivedDateTime property
     */
    messageReceivedDateTime?: Date | undefined;
    /**
     * The messageSubject property
     */
    messageSubject?: string | undefined;
    /**
     * The networkMessageId property
     */
    networkMessageId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
