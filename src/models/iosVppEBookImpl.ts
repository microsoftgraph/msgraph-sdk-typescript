import {ManagedEBookImpl} from './index';
import {IosVppEBook} from './iosVppEBook';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosVppEBookImpl extends ManagedEBookImpl implements IosVppEBook {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The Apple ID associated with Vpp token. */
    public appleId?: string | undefined;
    /** Genres. */
    public genres?: string[] | undefined;
    /** Language. */
    public language?: string | undefined;
    /** Seller. */
    public seller?: string | undefined;
    /** Total license count. */
    public totalLicenseCount?: number | undefined;
    /** Used license count. */
    public usedLicenseCount?: number | undefined;
    /** The Vpp token's organization name. */
    public vppOrganizationName?: string | undefined;
    /** The Vpp token ID. */
    public vppTokenId?: string | undefined;
    /**
     * Instantiates a new IosVppEBook and sets the default values.
     * @param iosVppEBookParameterValue 
     */
    public constructor(iosVppEBookParameterValue?: IosVppEBook | undefined) {
        super(iosVppEBookParameterValue);
        this.additionalData = iosVppEBookParameterValue?.additionalData ? iosVppEBookParameterValue?.additionalData! : {};
        this.appleId = iosVppEBookParameterValue?.appleId;
        this.genres = iosVppEBookParameterValue?.genres;
        this.language = iosVppEBookParameterValue?.language;
        this.seller = iosVppEBookParameterValue?.seller;
        this.totalLicenseCount = iosVppEBookParameterValue?.totalLicenseCount;
        this.usedLicenseCount = iosVppEBookParameterValue?.usedLicenseCount;
        this.vppOrganizationName = iosVppEBookParameterValue?.vppOrganizationName;
        this.vppTokenId = iosVppEBookParameterValue?.vppTokenId;
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
            "vppTokenId": n => { this.vppTokenId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appleId){
            writer.writeStringValue("appleId", this.appleId);
        }
        if(this.genres){
            writer.writeCollectionOfPrimitiveValues<string>("genres", this.genres);
        }
        if(this.language){
            writer.writeStringValue("language", this.language);
        }
        if(this.seller){
            writer.writeStringValue("seller", this.seller);
        }
        if(this.totalLicenseCount){
            writer.writeNumberValue("totalLicenseCount", this.totalLicenseCount);
        }
        if(this.usedLicenseCount){
            writer.writeNumberValue("usedLicenseCount", this.usedLicenseCount);
        }
        if(this.vppOrganizationName){
            writer.writeStringValue("vppOrganizationName", this.vppOrganizationName);
        }
        if(this.vppTokenId){
            writer.writeStringValue("vppTokenId", this.vppTokenId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
