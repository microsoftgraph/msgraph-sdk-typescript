import {AllowedTargetScope} from './allowedTargetScope';
import {createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue} from './createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue';
import {createAccessPackageAssignmentRequestorSettingsFromDiscriminatorValue} from './createAccessPackageAssignmentRequestorSettingsFromDiscriminatorValue';
import {createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue} from './createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue';
import {createAccessPackageAutomaticRequestSettingsFromDiscriminatorValue} from './createAccessPackageAutomaticRequestSettingsFromDiscriminatorValue';
import {createAccessPackageCatalogFromDiscriminatorValue} from './createAccessPackageCatalogFromDiscriminatorValue';
import {createAccessPackageFromDiscriminatorValue} from './createAccessPackageFromDiscriminatorValue';
import {createExpirationPatternFromDiscriminatorValue} from './createExpirationPatternFromDiscriminatorValue';
import {createSubjectSetFromDiscriminatorValue} from './createSubjectSetFromDiscriminatorValue';
import {AccessPackage, AccessPackageAssignmentApprovalSettings, AccessPackageAssignmentRequestorSettings, AccessPackageAssignmentReviewSettings, AccessPackageAutomaticRequestSettings, AccessPackageCatalog, Entity, ExpirationPattern, SubjectSet} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreementAcceptance entities. */
export class AccessPackageAssignmentPolicy extends Entity implements Parsable {
    /** Access package containing this policy. Read-only. */
    private _accessPackage?: AccessPackage | undefined;
    /** Principals that can be assigned the access package through this policy. The possible values are: notSpecified, specificDirectoryUsers, specificConnectedOrganizationUsers, specificDirectoryServicePrincipals, allMemberUsers, allDirectoryUsers, allDirectoryServicePrincipals, allConfiguredConnectedOrganizationUsers, allExternalUsers, unknownFutureValue. */
    private _allowedTargetScope?: AllowedTargetScope | undefined;
    /** This property is only present for an auto assignment policy; if absent, this is a request-based policy. */
    private _automaticRequestSettings?: AccessPackageAutomaticRequestSettings | undefined;
    /** Catalog of the access package containing this policy. Read-only. */
    private _catalog?: AccessPackageCatalog | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _createdDateTime?: Date | undefined;
    /** The description of the policy. */
    private _description?: string | undefined;
    /** The display name of the policy. */
    private _displayName?: string | undefined;
    /** The expiration date for assignments created in this policy. */
    private _expiration?: ExpirationPattern | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _modifiedDateTime?: Date | undefined;
    /** Specifies the settings for approval of requests for an access package assignment through this policy. For example, if approval is required for new requests. */
    private _requestApprovalSettings?: AccessPackageAssignmentApprovalSettings | undefined;
    /** Provides additional settings to select who can create a request for an access package assignment through this policy, and what they can include in their request. */
    private _requestorSettings?: AccessPackageAssignmentRequestorSettings | undefined;
    /** Settings for access reviews of assignments through this policy. */
    private _reviewSettings?: AccessPackageAssignmentReviewSettings | undefined;
    /** The principals that can be assigned access from an access package through this policy. */
    private _specificAllowedTargets?: SubjectSet[] | undefined;
    /**
     * Gets the accessPackage property value. Access package containing this policy. Read-only.
     * @returns a accessPackage
     */
    public get accessPackage() {
        return this._accessPackage;
    };
    /**
     * Sets the accessPackage property value. Access package containing this policy. Read-only.
     * @param value Value to set for the accessPackage property.
     */
    public set accessPackage(value: AccessPackage | undefined) {
        this._accessPackage = value;
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
        this._allowedTargetScope = value;
    };
    /**
     * Gets the automaticRequestSettings property value. This property is only present for an auto assignment policy; if absent, this is a request-based policy.
     * @returns a accessPackageAutomaticRequestSettings
     */
    public get automaticRequestSettings() {
        return this._automaticRequestSettings;
    };
    /**
     * Sets the automaticRequestSettings property value. This property is only present for an auto assignment policy; if absent, this is a request-based policy.
     * @param value Value to set for the automaticRequestSettings property.
     */
    public set automaticRequestSettings(value: AccessPackageAutomaticRequestSettings | undefined) {
        this._automaticRequestSettings = value;
    };
    /**
     * Gets the catalog property value. Catalog of the access package containing this policy. Read-only.
     * @returns a accessPackageCatalog
     */
    public get catalog() {
        return this._catalog;
    };
    /**
     * Sets the catalog property value. Catalog of the access package containing this policy. Read-only.
     * @param value Value to set for the catalog property.
     */
    public set catalog(value: AccessPackageCatalog | undefined) {
        this._catalog = value;
    };
    /**
     * Instantiates a new accessPackageAssignmentPolicy and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.accessPackageAssignmentPolicy";
    };
    /**
     * Gets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
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
        this._description = value;
    };
    /**
     * Gets the displayName property value. The display name of the policy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the policy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the expiration property value. The expiration date for assignments created in this policy.
     * @returns a expirationPattern
     */
    public get expiration() {
        return this._expiration;
    };
    /**
     * Sets the expiration property value. The expiration date for assignments created in this policy.
     * @param value Value to set for the expiration property.
     */
    public set expiration(value: ExpirationPattern | undefined) {
        this._expiration = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "accessPackage": n => { this.accessPackage = n.getObjectValue<AccessPackage>(createAccessPackageFromDiscriminatorValue); },
            "allowedTargetScope": n => { this.allowedTargetScope = n.getEnumValue<AllowedTargetScope>(AllowedTargetScope); },
            "automaticRequestSettings": n => { this.automaticRequestSettings = n.getObjectValue<AccessPackageAutomaticRequestSettings>(createAccessPackageAutomaticRequestSettingsFromDiscriminatorValue); },
            "catalog": n => { this.catalog = n.getObjectValue<AccessPackageCatalog>(createAccessPackageCatalogFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "expiration": n => { this.expiration = n.getObjectValue<ExpirationPattern>(createExpirationPatternFromDiscriminatorValue); },
            "modifiedDateTime": n => { this.modifiedDateTime = n.getDateValue(); },
            "requestApprovalSettings": n => { this.requestApprovalSettings = n.getObjectValue<AccessPackageAssignmentApprovalSettings>(createAccessPackageAssignmentApprovalSettingsFromDiscriminatorValue); },
            "requestorSettings": n => { this.requestorSettings = n.getObjectValue<AccessPackageAssignmentRequestorSettings>(createAccessPackageAssignmentRequestorSettingsFromDiscriminatorValue); },
            "reviewSettings": n => { this.reviewSettings = n.getObjectValue<AccessPackageAssignmentReviewSettings>(createAccessPackageAssignmentReviewSettingsFromDiscriminatorValue); },
            "specificAllowedTargets": n => { this.specificAllowedTargets = n.getCollectionOfObjectValues<SubjectSet>(createSubjectSetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get modifiedDateTime() {
        return this._modifiedDateTime;
    };
    /**
     * Sets the modifiedDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the modifiedDateTime property.
     */
    public set modifiedDateTime(value: Date | undefined) {
        this._modifiedDateTime = value;
    };
    /**
     * Gets the requestApprovalSettings property value. Specifies the settings for approval of requests for an access package assignment through this policy. For example, if approval is required for new requests.
     * @returns a accessPackageAssignmentApprovalSettings
     */
    public get requestApprovalSettings() {
        return this._requestApprovalSettings;
    };
    /**
     * Sets the requestApprovalSettings property value. Specifies the settings for approval of requests for an access package assignment through this policy. For example, if approval is required for new requests.
     * @param value Value to set for the requestApprovalSettings property.
     */
    public set requestApprovalSettings(value: AccessPackageAssignmentApprovalSettings | undefined) {
        this._requestApprovalSettings = value;
    };
    /**
     * Gets the requestorSettings property value. Provides additional settings to select who can create a request for an access package assignment through this policy, and what they can include in their request.
     * @returns a accessPackageAssignmentRequestorSettings
     */
    public get requestorSettings() {
        return this._requestorSettings;
    };
    /**
     * Sets the requestorSettings property value. Provides additional settings to select who can create a request for an access package assignment through this policy, and what they can include in their request.
     * @param value Value to set for the requestorSettings property.
     */
    public set requestorSettings(value: AccessPackageAssignmentRequestorSettings | undefined) {
        this._requestorSettings = value;
    };
    /**
     * Gets the reviewSettings property value. Settings for access reviews of assignments through this policy.
     * @returns a accessPackageAssignmentReviewSettings
     */
    public get reviewSettings() {
        return this._reviewSettings;
    };
    /**
     * Sets the reviewSettings property value. Settings for access reviews of assignments through this policy.
     * @param value Value to set for the reviewSettings property.
     */
    public set reviewSettings(value: AccessPackageAssignmentReviewSettings | undefined) {
        this._reviewSettings = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<AccessPackage>("accessPackage", this.accessPackage);
        writer.writeEnumValue<AllowedTargetScope>("allowedTargetScope", this.allowedTargetScope);
        writer.writeObjectValue<AccessPackageAutomaticRequestSettings>("automaticRequestSettings", this.automaticRequestSettings);
        writer.writeObjectValue<AccessPackageCatalog>("catalog", this.catalog);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<ExpirationPattern>("expiration", this.expiration);
        writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        writer.writeObjectValue<AccessPackageAssignmentApprovalSettings>("requestApprovalSettings", this.requestApprovalSettings);
        writer.writeObjectValue<AccessPackageAssignmentRequestorSettings>("requestorSettings", this.requestorSettings);
        writer.writeObjectValue<AccessPackageAssignmentReviewSettings>("reviewSettings", this.reviewSettings);
        writer.writeCollectionOfObjectValues<SubjectSet>("specificAllowedTargets", this.specificAllowedTargets);
    };
    /**
     * Gets the specificAllowedTargets property value. The principals that can be assigned access from an access package through this policy.
     * @returns a subjectSet
     */
    public get specificAllowedTargets() {
        return this._specificAllowedTargets;
    };
    /**
     * Sets the specificAllowedTargets property value. The principals that can be assigned access from an access package through this policy.
     * @param value Value to set for the specificAllowedTargets property.
     */
    public set specificAllowedTargets(value: SubjectSet[] | undefined) {
        this._specificAllowedTargets = value;
    };
}
