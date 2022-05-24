import {EducationTerm} from './educationTerm';
import {AdditionalDataHolder, DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationTermImpl implements AdditionalDataHolder, EducationTerm, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Display name of the term. */
    public displayName?: string | undefined;
    /** End of the term. */
    public endDate?: DateOnly | undefined;
    /** ID of term in the syncing system. */
    public externalId?: string | undefined;
    /** Start of the term. */
    public startDate?: DateOnly | undefined;
    /**
     * Instantiates a new educationTerm and sets the default values.
     * @param educationTermParameterValue 
     */
    public constructor(educationTermParameterValue?: EducationTerm | undefined) {
        this.additionalData = educationTermParameterValue?.additionalData ? educationTermParameterValue?.additionalData! : {}
        this.displayName = educationTermParameterValue?.displayName ;
        this.endDate = educationTermParameterValue?.endDate ;
        this.externalId = educationTermParameterValue?.externalId ;
        this.startDate = educationTermParameterValue?.startDate ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "endDate": n => { this.endDate = n.getDateOnlyValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "startDate": n => { this.startDate = n.getDateOnlyValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.endDate){
        writer.writeDateOnlyValue("endDate", this.endDate);
        }
        if(this.externalId){
        writer.writeStringValue("externalId", this.externalId);
        }
        if(this.startDate){
        writer.writeDateOnlyValue("startDate", this.startDate);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
