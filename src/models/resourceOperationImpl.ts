import {EntityImpl} from './index';
import {ResourceOperation} from './resourceOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Describes the resourceOperation resource (entity) of the Microsoft Graph API (REST), which supports Intune workflows related to role-based access control (RBAC). */
export class ResourceOperationImpl extends EntityImpl implements Parsable, ResourceOperation {
    /** Type of action this operation is going to perform. The actionName should be concise and limited to as few words as possible. */
    public actionName?: string | undefined;
    /** Description of the resource operation. The description is used in mouse-over text for the operation when shown in the Azure Portal. */
    public description?: string | undefined;
    /** Name of the Resource this operation is performed on. */
    public resourceName?: string | undefined;
    /**
     * Instantiates a new resourceOperation and sets the default values.
     * @param resourceOperationParameterValue 
     */
    public constructor(resourceOperationParameterValue?: ResourceOperation | undefined) {
        super();
        this.actionName = resourceOperationParameterValue?.actionName ;
        this.description = resourceOperationParameterValue?.description ;
        this.resourceName = resourceOperationParameterValue?.resourceName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "actionName": n => { this.actionName = n.getStringValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "resourceName": n => { this.resourceName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.actionName){
        writer.writeStringValue("actionName", this.actionName);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.resourceName){
        writer.writeStringValue("resourceName", this.resourceName);
        }
    };
}
