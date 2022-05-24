import {PendingContentUpdate} from './pendingContentUpdate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PendingContentUpdateImpl implements AdditionalDataHolder, Parsable, PendingContentUpdate {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Date and time the pending binary operation was queued in UTC time. Read-only. */
    public queuedDateTime?: Date | undefined;
    /**
     * Instantiates a new pendingContentUpdate and sets the default values.
     * @param pendingContentUpdateParameterValue 
     */
    public constructor(pendingContentUpdateParameterValue?: PendingContentUpdate | undefined) {
        this.additionalData = pendingContentUpdateParameterValue?.additionalData ? pendingContentUpdateParameterValue?.additionalData! : {}
        this.queuedDateTime = pendingContentUpdateParameterValue?.queuedDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "queuedDateTime": n => { this.queuedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.queuedDateTime){
        writer.writeDateValue("queuedDateTime", this.queuedDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
