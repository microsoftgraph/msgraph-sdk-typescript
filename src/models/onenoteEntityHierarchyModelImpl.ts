import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {IdentitySetImpl, OnenoteEntitySchemaObjectModelImpl} from './index';
import {OnenoteEntityHierarchyModel} from './onenoteEntityHierarchyModel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class OnenoteEntityHierarchyModelImpl extends OnenoteEntitySchemaObjectModelImpl implements OnenoteEntityHierarchyModel, Parsable {
    /** Identity of the user, device, and application which created the item. Read-only. */
    public createdBy?: IdentitySet | undefined;
    /** The name of the notebook. */
    public displayName?: string | undefined;
    /** Identity of the user, device, and application which created the item. Read-only. */
    public lastModifiedBy?: IdentitySet | undefined;
    /** The date and time when the notebook was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public lastModifiedDateTime?: Date | undefined;
    /**
     * Instantiates a new onenoteEntityHierarchyModel and sets the default values.
     * @param onenoteEntityHierarchyModelParameterValue 
     */
    public constructor(onenoteEntityHierarchyModelParameterValue?: OnenoteEntityHierarchyModel | undefined) {
        super();
        this.createdBy = onenoteEntityHierarchyModelParameterValue?.createdBy ;
        this.displayName = onenoteEntityHierarchyModelParameterValue?.displayName ;
        this.lastModifiedBy = onenoteEntityHierarchyModelParameterValue?.lastModifiedBy ;
        this.lastModifiedDateTime = onenoteEntityHierarchyModelParameterValue?.lastModifiedDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdBy){
        writer.writeObjectValue<IdentitySetImpl>("createdBy", new IdentitySetImpl(this.createdBy));
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.lastModifiedBy){
        writer.writeObjectValue<IdentitySetImpl>("lastModifiedBy", new IdentitySetImpl(this.lastModifiedBy));
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
    };
}
