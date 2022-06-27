import {MobileAppImpl} from './index';
import {MicrosoftStoreForBusinessApp} from './microsoftStoreForBusinessApp';
import {MicrosoftStoreForBusinessLicenseType} from './microsoftStoreForBusinessLicenseType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MicrosoftStoreForBusinessAppImpl extends MobileAppImpl implements MicrosoftStoreForBusinessApp {
    /** The app license type. Possible values are: offline, online. */
    public licenseType?: MicrosoftStoreForBusinessLicenseType | undefined;
    /** The app package identifier */
    public packageIdentityName?: string | undefined;
    /** The app product key */
    public productKey?: string | undefined;
    /** The total number of Microsoft Store for Business licenses. */
    public totalLicenseCount?: number | undefined;
    /** The number of Microsoft Store for Business licenses in use. */
    public usedLicenseCount?: number | undefined;
    /**
     * Instantiates a new MicrosoftStoreForBusinessApp and sets the default values.
     * @param microsoftStoreForBusinessAppParameterValue 
     */
    public constructor(microsoftStoreForBusinessAppParameterValue?: MicrosoftStoreForBusinessApp | undefined) {
        super(microsoftStoreForBusinessAppParameterValue);
        this.licenseType = microsoftStoreForBusinessAppParameterValue?.licenseType;
        this.packageIdentityName = microsoftStoreForBusinessAppParameterValue?.packageIdentityName;
        this.productKey = microsoftStoreForBusinessAppParameterValue?.productKey;
        this.totalLicenseCount = microsoftStoreForBusinessAppParameterValue?.totalLicenseCount;
        this.usedLicenseCount = microsoftStoreForBusinessAppParameterValue?.usedLicenseCount;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "licenseType": n => { this.licenseType = n.getEnumValue<MicrosoftStoreForBusinessLicenseType>(MicrosoftStoreForBusinessLicenseType); },
            "packageIdentityName": n => { this.packageIdentityName = n.getStringValue(); },
            "productKey": n => { this.productKey = n.getStringValue(); },
            "totalLicenseCount": n => { this.totalLicenseCount = n.getNumberValue(); },
            "usedLicenseCount": n => { this.usedLicenseCount = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.licenseType){
            writer.writeEnumValue<MicrosoftStoreForBusinessLicenseType>("licenseType", this.licenseType);
        }
        if(this.packageIdentityName){
            writer.writeStringValue("packageIdentityName", this.packageIdentityName);
        }
        if(this.productKey){
            writer.writeStringValue("productKey", this.productKey);
        }
        if(this.totalLicenseCount){
            writer.writeNumberValue("totalLicenseCount", this.totalLicenseCount);
        }
        if(this.usedLicenseCount){
            writer.writeNumberValue("usedLicenseCount", this.usedLicenseCount);
        }
    };
}
