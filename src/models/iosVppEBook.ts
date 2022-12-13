import {ManagedEBook} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosVppEBook extends ManagedEBook implements Parsable {
    /** The Apple ID associated with Vpp token. */
    private _appleId?: string | undefined;
    /** Genres. */
    private _genres?: string[] | undefined;
    /** Language. */
    private _language?: string | undefined;
    /** Seller. */
    private _seller?: string | undefined;
    /** Total license count. */
    private _totalLicenseCount?: number | undefined;
    /** Used license count. */
    private _usedLicenseCount?: number | undefined;
    /** The Vpp token's organization name. */
    private _vppOrganizationName?: string | undefined;
    /** The Vpp token ID. */
    private _vppTokenId?: Guid | undefined;
    /**
     * Gets the appleId property value. The Apple ID associated with Vpp token.
     * @returns a string
     */
    public get appleId() {
        return this._appleId;
    };
    /**
     * Sets the appleId property value. The Apple ID associated with Vpp token.
     * @param value Value to set for the appleId property.
     */
    public set appleId(value: string | undefined) {
        this._appleId = value;
    };
    /**
     * Instantiates a new IosVppEBook and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.iosVppEBook";
    };
    /**
     * Gets the genres property value. Genres.
     * @returns a string
     */
    public get genres() {
        return this._genres;
    };
    /**
     * Sets the genres property value. Genres.
     * @param value Value to set for the genres property.
     */
    public set genres(value: string[] | undefined) {
        this._genres = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appleId": n => { this.appleId = n.getStringValue(); },
            "genres": n => { this.genres = n.getCollectionOfPrimitiveValues<string>(); },
            "language": n => { this.language = n.getStringValue(); },
            "seller": n => { this.seller = n.getStringValue(); },
            "totalLicenseCount": n => { this.totalLicenseCount = n.getNumberValue(); },
            "usedLicenseCount": n => { this.usedLicenseCount = n.getNumberValue(); },
            "vppOrganizationName": n => { this.vppOrganizationName = n.getStringValue(); },
            "vppTokenId": n => { this.vppTokenId = n.getGuidValue(); },
        };
    };
    /**
     * Gets the language property value. Language.
     * @returns a string
     */
    public get language() {
        return this._language;
    };
    /**
     * Sets the language property value. Language.
     * @param value Value to set for the language property.
     */
    public set language(value: string | undefined) {
        this._language = value;
    };
    /**
     * Gets the seller property value. Seller.
     * @returns a string
     */
    public get seller() {
        return this._seller;
    };
    /**
     * Sets the seller property value. Seller.
     * @param value Value to set for the seller property.
     */
    public set seller(value: string | undefined) {
        this._seller = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appleId", this.appleId);
        writer.writeCollectionOfPrimitiveValues<string>("genres", this.genres);
        writer.writeStringValue("language", this.language);
        writer.writeStringValue("seller", this.seller);
        writer.writeNumberValue("totalLicenseCount", this.totalLicenseCount);
        writer.writeNumberValue("usedLicenseCount", this.usedLicenseCount);
        writer.writeStringValue("vppOrganizationName", this.vppOrganizationName);
        writer.writeGuidValue("vppTokenId", this.vppTokenId);
    };
    /**
     * Gets the totalLicenseCount property value. Total license count.
     * @returns a integer
     */
    public get totalLicenseCount() {
        return this._totalLicenseCount;
    };
    /**
     * Sets the totalLicenseCount property value. Total license count.
     * @param value Value to set for the totalLicenseCount property.
     */
    public set totalLicenseCount(value: number | undefined) {
        this._totalLicenseCount = value;
    };
    /**
     * Gets the usedLicenseCount property value. Used license count.
     * @returns a integer
     */
    public get usedLicenseCount() {
        return this._usedLicenseCount;
    };
    /**
     * Sets the usedLicenseCount property value. Used license count.
     * @param value Value to set for the usedLicenseCount property.
     */
    public set usedLicenseCount(value: number | undefined) {
        this._usedLicenseCount = value;
    };
    /**
     * Gets the vppOrganizationName property value. The Vpp token's organization name.
     * @returns a string
     */
    public get vppOrganizationName() {
        return this._vppOrganizationName;
    };
    /**
     * Sets the vppOrganizationName property value. The Vpp token's organization name.
     * @param value Value to set for the vppOrganizationName property.
     */
    public set vppOrganizationName(value: string | undefined) {
        this._vppOrganizationName = value;
    };
    /**
     * Gets the vppTokenId property value. The Vpp token ID.
     * @returns a Guid
     */
    public get vppTokenId() {
        return this._vppTokenId;
    };
    /**
     * Sets the vppTokenId property value. The Vpp token ID.
     * @param value Value to set for the vppTokenId property.
     */
    public set vppTokenId(value: Guid | undefined) {
        this._vppTokenId = value;
    };
}
