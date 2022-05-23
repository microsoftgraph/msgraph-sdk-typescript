import {AlertDetection} from './alertDetection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlertDetectionImpl implements AdditionalDataHolder, AlertDetection, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The detectionType property */
    public detectionType?: string | undefined;
    /** The method property */
    public method?: string | undefined;
    /** The name property */
    public name?: string | undefined;
    /**
     * Instantiates a new alertDetection and sets the default values.
     * @param alertDetectionParameterValue 
     */
    public constructor(alertDetectionParameterValue?: AlertDetection | undefined) {
        this.additionalData = alertDetectionParameterValue?.additionalData ? alertDetectionParameterValue?.additionalData! : {}
        this.detectionType = alertDetectionParameterValue?.detectionType ;
        this.method = alertDetectionParameterValue?.method ;
        this.name = alertDetectionParameterValue?.name ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "detectionType": n => { this.detectionType = n.getStringValue(); },
            "method": n => { this.method = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.detectionType){
        writer.writeStringValue("detectionType", this.detectionType);
        }
        if(this.method){
        writer.writeStringValue("method", this.method);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
