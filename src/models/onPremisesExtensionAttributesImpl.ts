import {OnPremisesExtensionAttributes} from './onPremisesExtensionAttributes';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OnPremisesExtensionAttributesImpl implements AdditionalDataHolder, OnPremisesExtensionAttributes, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** First customizable extension attribute. */
    public extensionAttribute1?: string | undefined;
    /** Tenth customizable extension attribute. */
    public extensionAttribute10?: string | undefined;
    /** Eleventh customizable extension attribute. */
    public extensionAttribute11?: string | undefined;
    /** Twelfth customizable extension attribute. */
    public extensionAttribute12?: string | undefined;
    /** Thirteenth customizable extension attribute. */
    public extensionAttribute13?: string | undefined;
    /** Fourteenth customizable extension attribute. */
    public extensionAttribute14?: string | undefined;
    /** Fifteenth customizable extension attribute. */
    public extensionAttribute15?: string | undefined;
    /** Second customizable extension attribute. */
    public extensionAttribute2?: string | undefined;
    /** Third customizable extension attribute. */
    public extensionAttribute3?: string | undefined;
    /** Fourth customizable extension attribute. */
    public extensionAttribute4?: string | undefined;
    /** Fifth customizable extension attribute. */
    public extensionAttribute5?: string | undefined;
    /** Sixth customizable extension attribute. */
    public extensionAttribute6?: string | undefined;
    /** Seventh customizable extension attribute. */
    public extensionAttribute7?: string | undefined;
    /** Eighth customizable extension attribute. */
    public extensionAttribute8?: string | undefined;
    /** Ninth customizable extension attribute. */
    public extensionAttribute9?: string | undefined;
    /**
     * Instantiates a new onPremisesExtensionAttributes and sets the default values.
     * @param onPremisesExtensionAttributesParameterValue 
     */
    public constructor(onPremisesExtensionAttributesParameterValue?: OnPremisesExtensionAttributes | undefined) {
        this.additionalData = onPremisesExtensionAttributesParameterValue?.additionalData ? onPremisesExtensionAttributesParameterValue?.additionalData! : {}
        this.extensionAttribute1 = onPremisesExtensionAttributesParameterValue?.extensionAttribute1 ;
        this.extensionAttribute10 = onPremisesExtensionAttributesParameterValue?.extensionAttribute10 ;
        this.extensionAttribute11 = onPremisesExtensionAttributesParameterValue?.extensionAttribute11 ;
        this.extensionAttribute12 = onPremisesExtensionAttributesParameterValue?.extensionAttribute12 ;
        this.extensionAttribute13 = onPremisesExtensionAttributesParameterValue?.extensionAttribute13 ;
        this.extensionAttribute14 = onPremisesExtensionAttributesParameterValue?.extensionAttribute14 ;
        this.extensionAttribute15 = onPremisesExtensionAttributesParameterValue?.extensionAttribute15 ;
        this.extensionAttribute2 = onPremisesExtensionAttributesParameterValue?.extensionAttribute2 ;
        this.extensionAttribute3 = onPremisesExtensionAttributesParameterValue?.extensionAttribute3 ;
        this.extensionAttribute4 = onPremisesExtensionAttributesParameterValue?.extensionAttribute4 ;
        this.extensionAttribute5 = onPremisesExtensionAttributesParameterValue?.extensionAttribute5 ;
        this.extensionAttribute6 = onPremisesExtensionAttributesParameterValue?.extensionAttribute6 ;
        this.extensionAttribute7 = onPremisesExtensionAttributesParameterValue?.extensionAttribute7 ;
        this.extensionAttribute8 = onPremisesExtensionAttributesParameterValue?.extensionAttribute8 ;
        this.extensionAttribute9 = onPremisesExtensionAttributesParameterValue?.extensionAttribute9 ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "extensionAttribute1": n => { this.extensionAttribute1 = n.getStringValue(); },
            "extensionAttribute10": n => { this.extensionAttribute10 = n.getStringValue(); },
            "extensionAttribute11": n => { this.extensionAttribute11 = n.getStringValue(); },
            "extensionAttribute12": n => { this.extensionAttribute12 = n.getStringValue(); },
            "extensionAttribute13": n => { this.extensionAttribute13 = n.getStringValue(); },
            "extensionAttribute14": n => { this.extensionAttribute14 = n.getStringValue(); },
            "extensionAttribute15": n => { this.extensionAttribute15 = n.getStringValue(); },
            "extensionAttribute2": n => { this.extensionAttribute2 = n.getStringValue(); },
            "extensionAttribute3": n => { this.extensionAttribute3 = n.getStringValue(); },
            "extensionAttribute4": n => { this.extensionAttribute4 = n.getStringValue(); },
            "extensionAttribute5": n => { this.extensionAttribute5 = n.getStringValue(); },
            "extensionAttribute6": n => { this.extensionAttribute6 = n.getStringValue(); },
            "extensionAttribute7": n => { this.extensionAttribute7 = n.getStringValue(); },
            "extensionAttribute8": n => { this.extensionAttribute8 = n.getStringValue(); },
            "extensionAttribute9": n => { this.extensionAttribute9 = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.extensionAttribute1){
        writer.writeStringValue("extensionAttribute1", this.extensionAttribute1);
        }
        if(this.extensionAttribute10){
        writer.writeStringValue("extensionAttribute10", this.extensionAttribute10);
        }
        if(this.extensionAttribute11){
        writer.writeStringValue("extensionAttribute11", this.extensionAttribute11);
        }
        if(this.extensionAttribute12){
        writer.writeStringValue("extensionAttribute12", this.extensionAttribute12);
        }
        if(this.extensionAttribute13){
        writer.writeStringValue("extensionAttribute13", this.extensionAttribute13);
        }
        if(this.extensionAttribute14){
        writer.writeStringValue("extensionAttribute14", this.extensionAttribute14);
        }
        if(this.extensionAttribute15){
        writer.writeStringValue("extensionAttribute15", this.extensionAttribute15);
        }
        if(this.extensionAttribute2){
        writer.writeStringValue("extensionAttribute2", this.extensionAttribute2);
        }
        if(this.extensionAttribute3){
        writer.writeStringValue("extensionAttribute3", this.extensionAttribute3);
        }
        if(this.extensionAttribute4){
        writer.writeStringValue("extensionAttribute4", this.extensionAttribute4);
        }
        if(this.extensionAttribute5){
        writer.writeStringValue("extensionAttribute5", this.extensionAttribute5);
        }
        if(this.extensionAttribute6){
        writer.writeStringValue("extensionAttribute6", this.extensionAttribute6);
        }
        if(this.extensionAttribute7){
        writer.writeStringValue("extensionAttribute7", this.extensionAttribute7);
        }
        if(this.extensionAttribute8){
        writer.writeStringValue("extensionAttribute8", this.extensionAttribute8);
        }
        if(this.extensionAttribute9){
        writer.writeStringValue("extensionAttribute9", this.extensionAttribute9);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
