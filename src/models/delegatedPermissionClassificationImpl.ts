import {DelegatedPermissionClassification} from './delegatedPermissionClassification';
import {EntityImpl} from './index';
import {PermissionClassificationType} from './permissionClassificationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the instantiate method. */
export class DelegatedPermissionClassificationImpl extends EntityImpl implements DelegatedPermissionClassification, Parsable {
    /** The classification value being given. Possible value: low. Does not support $filter. */
    public classification?: PermissionClassificationType | undefined;
    /** The unique identifier (id) for the delegated permission listed in the publishedPermissionScopes collection of the servicePrincipal. Required on create. Does not support $filter. */
    public permissionId?: string | undefined;
    /** The claim value (value) for the delegated permission listed in the publishedPermissionScopes collection of the servicePrincipal. Does not support $filter. */
    public permissionName?: string | undefined;
    /**
     * Instantiates a new delegatedPermissionClassification and sets the default values.
     * @param delegatedPermissionClassificationParameterValue 
     */
    public constructor(delegatedPermissionClassificationParameterValue?: DelegatedPermissionClassification | undefined) {
        super();
        this.classification = delegatedPermissionClassificationParameterValue?.classification ;
        this.permissionId = delegatedPermissionClassificationParameterValue?.permissionId ;
        this.permissionName = delegatedPermissionClassificationParameterValue?.permissionName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "classification": n => { this.classification = n.getEnumValue<PermissionClassificationType>(PermissionClassificationType); },
            "permissionId": n => { this.permissionId = n.getStringValue(); },
            "permissionName": n => { this.permissionName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.classification){
        writer.writeEnumValue<PermissionClassificationType>("classification", this.classification);
        }
        if(this.permissionId){
        writer.writeStringValue("permissionId", this.permissionId);
        }
        if(this.permissionName){
        writer.writeStringValue("permissionName", this.permissionName);
        }
    };
}
