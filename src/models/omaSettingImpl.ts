import {OmaSetting} from './omaSetting';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** OMA Settings definition. */
export class OmaSettingImpl implements OmaSetting {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Description. */
    public description?: string | undefined;
    /** Display Name. */
    public displayName?: string | undefined;
    /** OMA. */
    public omaUri?: string | undefined;
    /**
     * Instantiates a new omaSetting and sets the default values.
     * @param omaSettingParameterValue 
     */
    public constructor(omaSettingParameterValue?: OmaSetting | undefined) {
        this.additionalData = omaSettingParameterValue?.additionalData ? omaSettingParameterValue?.additionalData! : {};
        this.description = omaSettingParameterValue?.description;
        this.displayName = omaSettingParameterValue?.displayName;
        this.omaUri = omaSettingParameterValue?.omaUri;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "omaUri": n => { this.omaUri = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.omaUri){
            writer.writeStringValue("omaUri", this.omaUri);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
