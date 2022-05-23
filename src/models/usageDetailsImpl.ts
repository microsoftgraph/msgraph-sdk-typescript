import {UsageDetails} from './usageDetails';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UsageDetailsImpl implements AdditionalDataHolder, Parsable, UsageDetails {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The date and time the resource was last accessed by the user. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public lastAccessedDateTime?: Date | undefined;
    /** The date and time the resource was last modified by the user. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public lastModifiedDateTime?: Date | undefined;
    /**
     * Instantiates a new usageDetails and sets the default values.
     * @param usageDetailsParameterValue 
     */
    public constructor(usageDetailsParameterValue?: UsageDetails | undefined) {
        this.additionalData = usageDetailsParameterValue?.additionalData ? usageDetailsParameterValue?.additionalData! : {}
        this.lastAccessedDateTime = usageDetailsParameterValue?.lastAccessedDateTime ;
        this.lastModifiedDateTime = usageDetailsParameterValue?.lastModifiedDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "lastAccessedDateTime": n => { this.lastAccessedDateTime = n.getDateValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.lastAccessedDateTime){
        writer.writeDateValue("lastAccessedDateTime", this.lastAccessedDateTime);
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
