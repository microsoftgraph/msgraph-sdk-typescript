import {AccessPackage} from './accessPackage';
import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {createAccessPackageAssignmentPolicyFromDiscriminatorValue} from './createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import {createAccessPackageCatalogFromDiscriminatorValue} from './createAccessPackageCatalogFromDiscriminatorValue';
import {AccessPackageAssignmentPolicyImpl, AccessPackageCatalogImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessPackageImpl extends EntityImpl implements AccessPackage, Parsable {
    /** Read-only. Nullable. */
    public assignmentPolicies?: AccessPackageAssignmentPolicy[] | undefined;
    /** Read-only. Nullable. */
    public catalog?: AccessPackageCatalog | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public createdDateTime?: Date | undefined;
    /** The description of the access package. */
    public description?: string | undefined;
    /** The display name of the access package. Supports $filter (eq, contains). */
    public displayName?: string | undefined;
    /** Whether the access package is hidden from the requestor. */
    public isHidden?: boolean | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    public modifiedDateTime?: Date | undefined;
    /**
     * Instantiates a new accessPackage and sets the default values.
     * @param accessPackageParameterValue 
     */
    public constructor(accessPackageParameterValue?: AccessPackage | undefined) {
        super();
        this.assignmentPolicies = accessPackageParameterValue?.assignmentPolicies ;
        this.catalog = accessPackageParameterValue?.catalog ;
        this.createdDateTime = accessPackageParameterValue?.createdDateTime ;
        this.description = accessPackageParameterValue?.description ;
        this.displayName = accessPackageParameterValue?.displayName ;
        this.isHidden = accessPackageParameterValue?.isHidden ;
        this.modifiedDateTime = accessPackageParameterValue?.modifiedDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assignmentPolicies": n => { this.assignmentPolicies = n.getCollectionOfObjectValues<AccessPackageAssignmentPolicyImpl>(createAccessPackageAssignmentPolicyFromDiscriminatorValue); },
            "catalog": n => { this.catalog = n.getObjectValue<AccessPackageCatalogImpl>(createAccessPackageCatalogFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isHidden": n => { this.isHidden = n.getBooleanValue(); },
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
        if(this.assignmentPolicies && this.assignmentPolicies.length != 0){        const assignmentPoliciesArrValue: AccessPackageAssignmentPolicyImpl[] = []; this.assignmentPolicies?.forEach(element => {assignmentPoliciesArrValue.push(new AccessPackageAssignmentPolicyImpl(element));});
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentPolicyImpl>("assignmentPolicies", assignmentPoliciesArrValue);
        }
        if(this.catalog){
        writer.writeObjectValue<AccessPackageCatalogImpl>("catalog", new AccessPackageCatalogImpl(this.catalog));
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isHidden){
        writer.writeBooleanValue("isHidden", this.isHidden);
        }
        if(this.modifiedDateTime){
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        }
    };
}
