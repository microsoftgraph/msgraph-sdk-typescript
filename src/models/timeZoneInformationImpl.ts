import {TimeZoneInformation} from './timeZoneInformation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeZoneInformationImpl implements AdditionalDataHolder, Parsable, TimeZoneInformation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** An identifier for the time zone.  */
    alias?: string | undefined;
    /** A display string that represents the time zone.  */
    displayName?: string | undefined;
    /**
     * Instantiates a new timeZoneInformation and sets the default values.
     * @param timeZoneInformationParameterValue 
     */
    public constructor(timeZoneInformationParameterValue?: TimeZoneInformation | undefined) {
        this.additionalData = {};
        this.additionalData = timeZoneInformationParameterValue?.additionalData ? {} : timeZoneInformationParameterValue?.additionalData!
        this.alias = timeZoneInformationParameterValue?.alias ;
        this.displayName = timeZoneInformationParameterValue?.displayName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "alias": n => { this.alias = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.alias){
        if(this.alias)
        writer.writeStringValue("alias", this.alias);
        }
        if(this.displayName){
        if(this.displayName)
        writer.writeStringValue("displayName", this.displayName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
