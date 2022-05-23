import {AccessAction} from './accessAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessActionImpl implements AccessAction, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new accessAction and sets the default values.
     * @param accessActionParameterValue 
     */
    public constructor(accessActionParameterValue?: AccessAction | undefined) {
        this.additionalData = accessActionParameterValue?.additionalData ? accessActionParameterValue?.additionalData! : {}
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
