import {SubjectSetImpl} from './index';
import {SingleUser} from './singleUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SingleUserImpl extends SubjectSetImpl implements SingleUser {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name of the user in Azure AD. Read only. */
    public description?: string | undefined;
    /** The ID of the user in Azure AD. */
    public userId?: string | undefined;
    /**
     * Instantiates a new SingleUser and sets the default values.
     * @param singleUserParameterValue 
     */
    public constructor(singleUserParameterValue?: SingleUser | undefined) {
        super(singleUserParameterValue);
        this.additionalData = singleUserParameterValue?.additionalData ? singleUserParameterValue?.additionalData! : {};
        this.description = singleUserParameterValue?.description;
        this.userId = singleUserParameterValue?.userId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.userId){
            writer.writeStringValue("userId", this.userId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
