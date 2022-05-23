import {EntityImpl} from './index';
import {NamedLocation} from './namedLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class NamedLocationImpl extends EntityImpl implements NamedLocation, Parsable {
    /** The Timestamp type represents creation date and time of the location using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public createdDateTime?: Date | undefined;
    /** Human-readable name of the location. */
    public displayName?: string | undefined;
    /** The Timestamp type represents last modified date and time of the location using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public modifiedDateTime?: Date | undefined;
    /**
     * Instantiates a new namedLocation and sets the default values.
     * @param namedLocationParameterValue 
     */
    public constructor(namedLocationParameterValue?: NamedLocation | undefined) {
        super();
        this.createdDateTime = namedLocationParameterValue?.createdDateTime ;
        this.displayName = namedLocationParameterValue?.displayName ;
        this.modifiedDateTime = namedLocationParameterValue?.modifiedDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "modifiedDateTime": n => { this.modifiedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.modifiedDateTime){
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        }
    };
}
