import {OnenoteEntityBaseModelImpl} from './index';
import {OnenoteEntitySchemaObjectModel} from './onenoteEntitySchemaObjectModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class OnenoteEntitySchemaObjectModelImpl extends OnenoteEntityBaseModelImpl implements OnenoteEntitySchemaObjectModel, Parsable {
    /** The date and time when the page was created. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public createdDateTime?: Date | undefined;
    /**
     * Instantiates a new onenoteEntitySchemaObjectModel and sets the default values.
     * @param onenoteEntitySchemaObjectModelParameterValue 
     */
    public constructor(onenoteEntitySchemaObjectModelParameterValue?: OnenoteEntitySchemaObjectModel | undefined) {
        super();
        this.createdDateTime = onenoteEntitySchemaObjectModelParameterValue?.createdDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
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
    };
}
