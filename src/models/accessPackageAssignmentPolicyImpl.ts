import {AccessPackage} from './accessPackage';
import {AccessPackageAssignmentApprovalSettings} from './accessPackageAssignmentApprovalSettings';
import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {AccessPackageAssignmentRequestorSettings} from './accessPackageAssignmentRequestorSettings';
import {AccessPackageAssignmentReviewSettings} from './accessPackageAssignmentReviewSettings';
import {AccessPackageCatalog} from './accessPackageCatalog';
import {AllowedTargetScope} from './allowedTargetScope';
import {createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue} from './createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue';
import {createAccessPackageAssignmentRequestorSettingsFromDiscriminatorValue} from './createAccessPackageAssignmentRequestorSettingsFromDiscriminatorValue';
import {createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue} from './createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue';
import {createAccessPackageCatalogFromDiscriminatorValue} from './createAccessPackageCatalogFromDiscriminatorValue';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {createExpirationPatternFromDiscriminatorValue} from './createExpirationPatternFromDiscriminatorValue';
import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {ExpirationPattern} from './expirationPattern';
import {AccessPackageAssignmentApprovalSettingsImpl, AccessPackageAssignmentRequestorSettingsImpl, AccessPackageAssignmentReviewSettingsImpl, AccessPackageCatalogImpl, AccessPackageImpl, EntityImpl, ExpirationPatternImpl, SubjectSetImpl} from './index';
import {SubjectSet} from './subjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessPackageAssignmentPolicyImpl extends EntityImpl implements AccessPackageAssignmentPolicy, Parsable {
    /** The access package with this policy. Read-only. Nullable. Supports $expand. */
    public accessPackage?: AccessPackage | undefined;
    /** Principals that can be assigned the access package through this policy. The possible values are: notSpecified, specificDirectoryUsers, specificConnectedOrganizationUsers, specificDirectoryServicePrincipals, allMemberUsers, allDirectoryUsers, allDirectoryServicePrincipals, allConfiguredConnectedOrganizationUsers, allExternalUsers, unknownFutureValue. */
    public allowedTargetScope?: AllowedTargetScope | undefined;
    /** Catalog of the access package containing this policy. Read-only. */
    public catalog?: AccessPackageCatalog | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public createdDateTime?: Date | undefined;
    /** The description of the policy. */
    public description?: string | undefined;
    /** The display name of the policy. Supports $filter (eq). */
    public displayName?: string | undefined;
    /** The expiration date for assignments created in this policy. */
    public expiration?: ExpirationPattern | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public modifiedDateTime?: Date | undefined;
    /** Who must approve requests for access package in this policy. */
    public requestApprovalSettings?: AccessPackageAssignmentApprovalSettings | undefined;
    /** Who can request this access package from this policy. */
    public requestorSettings?: AccessPackageAssignmentRequestorSettings | undefined;
    /** Settings for access reviews of assignments through this policy. */
    public reviewSettings?: AccessPackageAssignmentReviewSettings | undefined;
    /** The principals that can be assigned access from an access package through this policy. */
    public specificAllowedTargets?: SubjectSet[] | undefined;
    /**
     * Instantiates a new accessPackageAssignmentPolicy and sets the default values.
     * @param accessPackageAssignmentPolicyParameterValue 
     */
    public constructor(accessPackageAssignmentPolicyParameterValue?: AccessPackageAssignmentPolicy | undefined) {
        super();
        this.accessPackage = accessPackageAssignmentPolicyParameterValue?.accessPackage ;
        this.allowedTargetScope = accessPackageAssignmentPolicyParameterValue?.allowedTargetScope ;
        this.catalog = accessPackageAssignmentPolicyParameterValue?.catalog ;
        this.createdDateTime = accessPackageAssignmentPolicyParameterValue?.createdDateTime ;
        this.description = accessPackageAssignmentPolicyParameterValue?.description ;
        this.displayName = accessPackageAssignmentPolicyParameterValue?.displayName ;
        this.expiration = accessPackageAssignmentPolicyParameterValue?.expiration ;
        this.modifiedDateTime = accessPackageAssignmentPolicyParameterValue?.modifiedDateTime ;
        this.requestApprovalSettings = accessPackageAssignmentPolicyParameterValue?.requestApprovalSettings ;
        this.requestorSettings = accessPackageAssignmentPolicyParameterValue?.requestorSettings ;
        this.reviewSettings = accessPackageAssignmentPolicyParameterValue?.reviewSettings ;
        this.specificAllowedTargets = accessPackageAssignmentPolicyParameterValue?.specificAllowedTargets ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accessPackage": n => { this.accessPackage = n.getObjectValue<AccessPackageImpl>(createAccessPackageFromDiscriminatorValue); },
            "allowedTargetScope": n => { this.allowedTargetScope = n.getEnumValue<AllowedTargetScope>(AllowedTargetScope); },
            "catalog": n => { this.catalog = n.getObjectValue<AccessPackageCatalogImpl>(createAccessPackageCatalogFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "expiration": n => { this.expiration = n.getObjectValue<ExpirationPatternImpl>(createExpirationPatternFromDiscriminatorValue); },
            "modifiedDateTime": n => { this.modifiedDateTime = n.getDateValue(); },
            "requestApprovalSettings": n => { this.requestApprovalSettings = n.getObjectValue<AccessPackageAssignmentApprovalSettingsImpl>(createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue); },
            "requestorSettings": n => { this.requestorSettings = n.getObjectValue<AccessPackageAssignmentRequestorSettingsImpl>(createAccessPackageAssignmentRequestorSettingsFromDiscriminatorValue); },
            "reviewSettings": n => { this.reviewSettings = n.getObjectValue<AccessPackageAssignmentReviewSettingsImpl>(createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue); },
            "specificAllowedTargets": n => { this.specificAllowedTargets = n.getCollectionOfObjectValues<SubjectSetImpl>(createSubjectSetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accessPackage){
        writer.writeObjectValue<AccessPackageImpl>("accessPackage", new AccessPackageImpl(this.accessPackage));
        }
        if(this.allowedTargetScope){
        writer.writeEnumValue<AllowedTargetScope>("allowedTargetScope", this.allowedTargetScope);
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
        if(this.expiration){
        writer.writeObjectValue<ExpirationPatternImpl>("expiration", new ExpirationPatternImpl(this.expiration));
        }
        if(this.modifiedDateTime){
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        }
        if(this.requestApprovalSettings){
        writer.writeObjectValue<AccessPackageAssignmentApprovalSettingsImpl>("requestApprovalSettings", new AccessPackageAssignmentApprovalSettingsImpl(this.requestApprovalSettings));
        }
        if(this.requestorSettings){
        writer.writeObjectValue<AccessPackageAssignmentRequestorSettingsImpl>("requestorSettings", new AccessPackageAssignmentRequestorSettingsImpl(this.requestorSettings));
        }
        if(this.reviewSettings){
        writer.writeObjectValue<AccessPackageAssignmentReviewSettingsImpl>("reviewSettings", new AccessPackageAssignmentReviewSettingsImpl(this.reviewSettings));
        }
        if(this.specificAllowedTargets && this.specificAllowedTargets.length != 0){        const specificAllowedTargetsArrValue: SubjectSetImpl[] = []; this.specificAllowedTargets?.forEach(element => {specificAllowedTargetsArrValue.push(new SubjectSetImpl(element));});
        writer.writeCollectionOfObjectValues<SubjectSetImpl>("specificAllowedTargets", specificAllowedTargetsArrValue);
        }
    };
}
