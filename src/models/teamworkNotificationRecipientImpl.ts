import {TeamworkNotificationRecipient} from './teamworkNotificationRecipient';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamworkNotificationRecipientImpl implements AdditionalDataHolder, Parsable, TeamworkNotificationRecipient {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new teamworkNotificationRecipient and sets the default values.
     * @param teamworkNotificationRecipientParameterValue 
     */
    public constructor(teamworkNotificationRecipientParameterValue?: TeamworkNotificationRecipient | undefined) {
        this.additionalData = teamworkNotificationRecipientParameterValue?.additionalData ? teamworkNotificationRecipientParameterValue?.additionalData! : {}
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeAdditionalData(this.additionalData);
    };
}
