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
export class AccessPackageAssignmentPolicyImpl extends EntityImpl implements AccessPackageAssignmentPolicy {
    /** The access package with this policy. Read-only. Nullable. Supports $expand. */
    private _accessPackage?: AccessPackage | undefined;
    /** Principals that can be assigned the access package through this policy. The possible values are: notSpecified, specificDirectoryUsers, specificConnectedOrganizationUsers, specificDirectoryServicePrincipals, allMemberUsers, allDirectoryUsers, allDirectoryServicePrincipals, allConfiguredConnectedOrganizationUsers, allExternalUsers, unknownFutureValue. */
    private _allowedTargetScope?: AllowedTargetScope | undefined;
    /** Catalog of the access package containing this policy. Read-only. */
    private _catalog?: AccessPackageCatalog | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _createdDateTime?: Date | undefined;
    /** The description of the policy. */
    private _description?: string | undefined;
    /** The display name of the policy. Supports $filter (eq). */
    private _displayName?: string | undefined;
    /** The expiration date for assignments created in this policy. */
    private _expiration?: ExpirationPattern | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _modifiedDateTime?: Date | undefined;
    /** Who must approve requests for access package in this policy. */
    private _requestApprovalSettings?: AccessPackageAssignmentApprovalSettings | undefined;
    /** Who can request this access package from this policy. */
    private _requestorSettings?: AccessPackageAssignmentRequestorSettings | undefined;
    /** Settings for access reviews of assignments through this policy. */
    private _reviewSettings?: AccessPackageAssignmentReviewSettings | undefined;
    /** The principals that can be assigned access from an access package through this policy. */
    private _specificAllowedTargets?: SubjectSet[] | undefined;
    /**
     * Gets the accessPackage property value. The access package with this policy. Read-only. Nullable. Supports $expand.
     * @returns a AccessPackageInterface
     */
    public get accessPackage() {
        return this._accessPackage;
    };
    /**
     * Sets the accessPackage property value. The access package with this policy. Read-only. Nullable. Supports $expand.
     * @param value Value to set for the accessPackage property.
     */
    public set accessPackage(value: AccessPackage | undefined) {
        if(value) {
            this._accessPackage = value instanceof AccessPackageImpl? value : new AccessPackageImpl(value);
        }
    };
    /**
     * Gets the allowedTargetScope property value. Principals that can be assigned the access package through this policy. The possible values are: notSpecified, specificDirectoryUsers, specificConnectedOrganizationUsers, specificDirectoryServicePrincipals, allMemberUsers, allDirectoryUsers, allDirectoryServicePrincipals, allConfiguredConnectedOrganizationUsers, allExternalUsers, unknownFutureValue.
     * @returns a allowedTargetScope
     */
    public get allowedTargetScope() {
        return this._allowedTargetScope;
    };
    /**
     * Sets the allowedTargetScope property value. Principals that can be assigned the access package through this policy. The possible values are: notSpecified, specificDirectoryUsers, specificConnectedOrganizationUsers, specificDirectoryServicePrincipals, allMemberUsers, allDirectoryUsers, allDirectoryServicePrincipals, allConfiguredConnectedOrganizationUsers, allExternalUsers, unknownFutureValue.
     * @param value Value to set for the allowedTargetScope property.
     */
    public set allowedTargetScope(value: AllowedTargetScope | undefined) {
        if(value) {
            this._allowedTargetScope = value;
        }
    };
    /**
     * Gets the catalog property value. Catalog of the access package containing this policy. Read-only.
     * @returns a AccessPackageCatalogInterface
     */
    public get catalog() {
        return this._catalog;
    };
    /**
     * Sets the catalog property value. Catalog of the access package containing this policy. Read-only.
     * @param value Value to set for the catalog property.
     */
    public set catalog(value: AccessPackageCatalog | undefined) {
        if(value) {
            this._catalog = value instanceof AccessPackageCatalogImpl? value : new AccessPackageCatalogImpl(value);
        }
    };
    /**
     * Instantiates a new accessPackageAssignmentPolicy and sets the default values.
     * @param accessPackageAssignmentPolicyParameterValue 
     */
    public constructor(accessPackageAssignmentPolicyParameterValue?: AccessPackageAssignmentPolicy | undefined) {
        super(accessPackageAssignmentPolicyParameterValue);
        this._accessPackage = accessPackageAssignmentPolicyParameterValue?.accessPackage;
        this._allowedTargetScope = accessPackageAssignmentPolicyParameterValue?.allowedTargetScope;
        this._catalog = accessPackageAssignmentPolicyParameterValue?.catalog;
        this._createdDateTime = accessPackageAssignmentPolicyParameterValue?.createdDateTime;
        this._description = accessPackageAssignmentPolicyParameterValue?.description;
        this._displayName = accessPackageAssignmentPolicyParameterValue?.displayName;
        this._expiration = accessPackageAssignmentPolicyParameterValue?.expiration;
        this._modifiedDateTime = accessPackageAssignmentPolicyParameterValue?.modifiedDateTime;
        this._requestApprovalSettings = accessPackageAssignmentPolicyParameterValue?.requestApprovalSettings;
        this._requestorSettings = accessPackageAssignmentPolicyParameterValue?.requestorSettings;
        this._reviewSettings = accessPackageAssignmentPolicyParameterValue?.reviewSettings;
        this._specificAllowedTargets = accessPackageAssignmentPolicyParameterValue?.specificAllowedTargets;
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the description property value. The description of the policy.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of the policy.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. The display name of the policy. Supports $filter (eq).
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the policy. Supports $filter (eq).
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the expiration property value. The expiration date for assignments created in this policy.
     * @returns a ExpirationPatternInterface
     */
    public get expiration() {
        return this._expiration;
    };
    /**
     * Sets the expiration property value. The expiration date for assignments created in this policy.
     * @param value Value to set for the expiration property.
     */
    public set expiration(value: ExpirationPattern | undefined) {
        if(value) {
            this._expiration = value instanceof ExpirationPatternImpl? value : new ExpirationPatternImpl(value);
        }
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
     * Gets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get modifiedDateTime() {
        return this._modifiedDateTime;
    };
    /**
     * Sets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the modifiedDateTime property.
     */
    public set modifiedDateTime(value: Date | undefined) {
        if(value) {
            this._modifiedDateTime = value;
        }
    };
    /**
     * Gets the requestApprovalSettings property value. Who must approve requests for access package in this policy.
     * @returns a AccessPackageAssignmentApprovalSettingsInterface
     */
    public get requestApprovalSettings() {
        return this._requestApprovalSettings;
    };
    /**
     * Sets the requestApprovalSettings property value. Who must approve requests for access package in this policy.
     * @param value Value to set for the requestApprovalSettings property.
     */
    public set requestApprovalSettings(value: AccessPackageAssignmentApprovalSettings | undefined) {
        if(value) {
            this._requestApprovalSettings = value instanceof AccessPackageAssignmentApprovalSettingsImpl? value : new AccessPackageAssignmentApprovalSettingsImpl(value);
        }
    };
    /**
     * Gets the requestorSettings property value. Who can request this access package from this policy.
     * @returns a AccessPackageAssignmentRequestorSettingsInterface
     */
    public get requestorSettings() {
        return this._requestorSettings;
    };
    /**
     * Sets the requestorSettings property value. Who can request this access package from this policy.
     * @param value Value to set for the requestorSettings property.
     */
    public set requestorSettings(value: AccessPackageAssignmentRequestorSettings | undefined) {
        if(value) {
            this._requestorSettings = value instanceof AccessPackageAssignmentRequestorSettingsImpl? value : new AccessPackageAssignmentRequestorSettingsImpl(value);
        }
    };
    /**
     * Gets the reviewSettings property value. Settings for access reviews of assignments through this policy.
     * @returns a AccessPackageAssignmentReviewSettingsInterface
     */
    public get reviewSettings() {
        return this._reviewSettings;
    };
    /**
     * Sets the reviewSettings property value. Settings for access reviews of assignments through this policy.
     * @param value Value to set for the reviewSettings property.
     */
    public set reviewSettings(value: AccessPackageAssignmentReviewSettings | undefined) {
        if(value) {
            this._reviewSettings = value instanceof AccessPackageAssignmentReviewSettingsImpl? value : new AccessPackageAssignmentReviewSettingsImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.accessPackage){
            writer.writeObjectValue<AccessPackageImpl>("accessPackage", (!this.accessPackage || this.accessPackage instanceof AccessPackageImpl? this.accessPackage : new AccessPackageImpl(this.accessPackage)));
        }
        if(this.allowedTargetScope){
            writer.writeEnumValue<AllowedTargetScope>("allowedTargetScope", this.allowedTargetScope);
        }
        if(this.catalog){
            writer.writeObjectValue<AccessPackageCatalogImpl>("catalog", (!this.catalog || this.catalog instanceof AccessPackageCatalogImpl? this.catalog : new AccessPackageCatalogImpl(this.catalog)));
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
            writer.writeObjectValue<ExpirationPatternImpl>("expiration", (!this.expiration || this.expiration instanceof ExpirationPatternImpl? this.expiration : new ExpirationPatternImpl(this.expiration)));
        }
        if(this.modifiedDateTime){
            writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        }
        if(this.requestApprovalSettings){
            writer.writeObjectValue<AccessPackageAssignmentApprovalSettingsImpl>("requestApprovalSettings", (!this.requestApprovalSettings || this.requestApprovalSettings instanceof AccessPackageAssignmentApprovalSettingsImpl? this.requestApprovalSettings : new AccessPackageAssignmentApprovalSettingsImpl(this.requestApprovalSettings)));
        }
        if(this.requestorSettings){
            writer.writeObjectValue<AccessPackageAssignmentRequestorSettingsImpl>("requestorSettings", (!this.requestorSettings || this.requestorSettings instanceof AccessPackageAssignmentRequestorSettingsImpl? this.requestorSettings : new AccessPackageAssignmentRequestorSettingsImpl(this.requestorSettings)));
        }
        if(this.reviewSettings){
            writer.writeObjectValue<AccessPackageAssignmentReviewSettingsImpl>("reviewSettings", (!this.reviewSettings || this.reviewSettings instanceof AccessPackageAssignmentReviewSettingsImpl? this.reviewSettings : new AccessPackageAssignmentReviewSettingsImpl(this.reviewSettings)));
        }
        if(this.specificAllowedTargets && this.specificAllowedTargets.length != 0){        const specificAllowedTargetsArrValue: SubjectSetImpl[] = [];
        this.specificAllowedTargets?.forEach(element => {
            specificAllowedTargetsArrValue.push((element instanceof SubjectSetImpl? element:new SubjectSetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SubjectSetImpl>("specificAllowedTargets", specificAllowedTargetsArrValue);
        }
    };
    /**
     * Gets the specificAllowedTargets property value. The principals that can be assigned access from an access package through this policy.
     * @returns a SubjectSetInterface
     */
    public get specificAllowedTargets() {
        return this._specificAllowedTargets;
    };
    /**
     * Sets the specificAllowedTargets property value. The principals that can be assigned access from an access package through this policy.
     * @param value Value to set for the specificAllowedTargets property.
     */
    public set specificAllowedTargets(value: SubjectSet[] | undefined) {
        if(value) {
            const specificAllowedTargetsArrValue: SubjectSetImpl[] = [];
            this.specificAllowedTargets?.forEach(element => {
                specificAllowedTargetsArrValue.push((element instanceof SubjectSetImpl? element:new SubjectSetImpl(element)));
            });
            this._specificAllowedTargets = specificAllowedTargetsArrValue;
        }
    };
}
