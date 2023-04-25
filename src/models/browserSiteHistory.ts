import {BrowserSiteCompatibilityMode} from './browserSiteCompatibilityMode';
import {BrowserSiteMergeType} from './browserSiteMergeType';
import {BrowserSiteTargetEnvironment} from './browserSiteTargetEnvironment';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * The history for the site modifications
 */
export class BrowserSiteHistory implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Controls the behavior of redirected sites. If true, indicates that the site will open in Internet Explorer 11 or Microsoft Edge even if the site is navigated to as part of a HTTP or meta refresh redirection chain. */
    private _allowRedirect?: boolean | undefined;
    /** The comment for the site. */
    private _comment?: string | undefined;
    /** Controls what compatibility setting is used for specific sites or domains. The possible values are: default, internetExplorer8Enterprise, internetExplorer7Enterprise, internetExplorer11, internetExplorer10, internetExplorer9, internetExplorer8, internetExplorer7, internetExplorer5, unknownFutureValue. */
    private _compatibilityMode?: BrowserSiteCompatibilityMode | undefined;
    /** The user who last modified the site. */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** The merge type of the site. The possible values are: noMerge, default, unknownFutureValue. */
    private _mergeType?: BrowserSiteMergeType | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The date and time when the site was last published. */
    private _publishedDateTime?: Date | undefined;
    /** The target environment that the site should open in. The possible values are: internetExplorerMode, internetExplorer11, microsoftEdge, configurable, none, unknownFutureValue.Prior to June 15, 2022, the internetExplorer11 option would allow opening a site in the Internet Explorer 11 (IE11) desktop application. Following the retirement of IE11 on June 15, 2022, the internetExplorer11 option will no longer open an IE11 window and will instead behave the same as the internetExplorerMode option. */
    private _targetEnvironment?: BrowserSiteTargetEnvironment | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the allowRedirect property value. Controls the behavior of redirected sites. If true, indicates that the site will open in Internet Explorer 11 or Microsoft Edge even if the site is navigated to as part of a HTTP or meta refresh redirection chain.
     * @returns a boolean
     */
    public get allowRedirect() {
        return this._allowRedirect;
    };
    /**
     * Sets the allowRedirect property value. Controls the behavior of redirected sites. If true, indicates that the site will open in Internet Explorer 11 or Microsoft Edge even if the site is navigated to as part of a HTTP or meta refresh redirection chain.
     * @param value Value to set for the allowRedirect property.
     */
    public set allowRedirect(value: boolean | undefined) {
        this._allowRedirect = value;
    };
    /**
     * Gets the comment property value. The comment for the site.
     * @returns a string
     */
    public get comment() {
        return this._comment;
    };
    /**
     * Sets the comment property value. The comment for the site.
     * @param value Value to set for the comment property.
     */
    public set comment(value: string | undefined) {
        this._comment = value;
    };
    /**
     * Gets the compatibilityMode property value. Controls what compatibility setting is used for specific sites or domains. The possible values are: default, internetExplorer8Enterprise, internetExplorer7Enterprise, internetExplorer11, internetExplorer10, internetExplorer9, internetExplorer8, internetExplorer7, internetExplorer5, unknownFutureValue.
     * @returns a browserSiteCompatibilityMode
     */
    public get compatibilityMode() {
        return this._compatibilityMode;
    };
    /**
     * Sets the compatibilityMode property value. Controls what compatibility setting is used for specific sites or domains. The possible values are: default, internetExplorer8Enterprise, internetExplorer7Enterprise, internetExplorer11, internetExplorer10, internetExplorer9, internetExplorer8, internetExplorer7, internetExplorer5, unknownFutureValue.
     * @param value Value to set for the compatibilityMode property.
     */
    public set compatibilityMode(value: BrowserSiteCompatibilityMode | undefined) {
        this._compatibilityMode = value;
    };
    /**
     * Instantiates a new browserSiteHistory and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowRedirect": n => { this.allowRedirect = n.getBooleanValue(); },
            "comment": n => { this.comment = n.getStringValue(); },
            "compatibilityMode": n => { this.compatibilityMode = n.getEnumValue<BrowserSiteCompatibilityMode>(BrowserSiteCompatibilityMode); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "mergeType": n => { this.mergeType = n.getEnumValue<BrowserSiteMergeType>(BrowserSiteMergeType); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "publishedDateTime": n => { this.publishedDateTime = n.getDateValue(); },
            "targetEnvironment": n => { this.targetEnvironment = n.getEnumValue<BrowserSiteTargetEnvironment>(BrowserSiteTargetEnvironment); },
        };
    };
    /**
     * Gets the lastModifiedBy property value. The user who last modified the site.
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. The user who last modified the site.
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the mergeType property value. The merge type of the site. The possible values are: noMerge, default, unknownFutureValue.
     * @returns a browserSiteMergeType
     */
    public get mergeType() {
        return this._mergeType;
    };
    /**
     * Sets the mergeType property value. The merge type of the site. The possible values are: noMerge, default, unknownFutureValue.
     * @param value Value to set for the mergeType property.
     */
    public set mergeType(value: BrowserSiteMergeType | undefined) {
        this._mergeType = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Gets the publishedDateTime property value. The date and time when the site was last published.
     * @returns a Date
     */
    public get publishedDateTime() {
        return this._publishedDateTime;
    };
    /**
     * Sets the publishedDateTime property value. The date and time when the site was last published.
     * @param value Value to set for the publishedDateTime property.
     */
    public set publishedDateTime(value: Date | undefined) {
        this._publishedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("allowRedirect", this.allowRedirect);
        writer.writeStringValue("comment", this.comment);
        writer.writeEnumValue<BrowserSiteCompatibilityMode>("compatibilityMode", this.compatibilityMode);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeEnumValue<BrowserSiteMergeType>("mergeType", this.mergeType);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeDateValue("publishedDateTime", this.publishedDateTime);
        writer.writeEnumValue<BrowserSiteTargetEnvironment>("targetEnvironment", this.targetEnvironment);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the targetEnvironment property value. The target environment that the site should open in. The possible values are: internetExplorerMode, internetExplorer11, microsoftEdge, configurable, none, unknownFutureValue.Prior to June 15, 2022, the internetExplorer11 option would allow opening a site in the Internet Explorer 11 (IE11) desktop application. Following the retirement of IE11 on June 15, 2022, the internetExplorer11 option will no longer open an IE11 window and will instead behave the same as the internetExplorerMode option.
     * @returns a browserSiteTargetEnvironment
     */
    public get targetEnvironment() {
        return this._targetEnvironment;
    };
    /**
     * Sets the targetEnvironment property value. The target environment that the site should open in. The possible values are: internetExplorerMode, internetExplorer11, microsoftEdge, configurable, none, unknownFutureValue.Prior to June 15, 2022, the internetExplorer11 option would allow opening a site in the Internet Explorer 11 (IE11) desktop application. Following the retirement of IE11 on June 15, 2022, the internetExplorer11 option will no longer open an IE11 window and will instead behave the same as the internetExplorerMode option.
     * @param value Value to set for the targetEnvironment property.
     */
    public set targetEnvironment(value: BrowserSiteTargetEnvironment | undefined) {
        this._targetEnvironment = value;
    };
}
