import {createIosDeviceTypeFromDiscriminatorValue} from './createIosDeviceTypeFromDiscriminatorValue';
import {createVppLicensingTypeFromDiscriminatorValue} from './createVppLicensingTypeFromDiscriminatorValue';
import {IosDeviceTypeImpl, MobileAppImpl, VppLicensingTypeImpl} from './index';
import {IosDeviceType} from './iosDeviceType';
import {IosVppApp} from './iosVppApp';
import {VppLicensingType} from './vppLicensingType';
import {VppTokenAccountType} from './vppTokenAccountType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IosVppAppImpl extends MobileAppImpl implements IosVppApp {
    /** The applicable iOS Device Type. */
    public applicableDeviceType?: IosDeviceType | undefined;
    /** The store URL. */
    public appStoreUrl?: string | undefined;
    /** The Identity Name. */
    public bundleId?: string | undefined;
    /** The supported License Type. */
    public licensingType?: VppLicensingType | undefined;
    /** The VPP application release date and time. */
    public releaseDateTime?: Date | undefined;
    /** The total number of VPP licenses. */
    public totalLicenseCount?: number | undefined;
    /** The number of VPP licenses in use. */
    public usedLicenseCount?: number | undefined;
    /** The type of volume purchase program which the given Apple Volume Purchase Program Token is associated with. Possible values are: business, education. Possible values are: business, education. */
    public vppTokenAccountType?: VppTokenAccountType | undefined;
    /** The Apple Id associated with the given Apple Volume Purchase Program Token. */
    public vppTokenAppleId?: string | undefined;
    /** The organization associated with the Apple Volume Purchase Program Token */
    public vppTokenOrganizationName?: string | undefined;
    /**
     * Instantiates a new IosVppApp and sets the default values.
     * @param iosVppAppParameterValue 
     */
    public constructor(iosVppAppParameterValue?: IosVppApp | undefined) {
        super(iosVppAppParameterValue);
        this.applicableDeviceType = iosVppAppParameterValue?.applicableDeviceType instanceof IosDeviceTypeImpl? iosVppAppParameterValue?.applicableDeviceType:new IosDeviceTypeImpl(iosVppAppParameterValue?.applicableDeviceType);
        this.appStoreUrl = iosVppAppParameterValue?.appStoreUrl;
        this.bundleId = iosVppAppParameterValue?.bundleId;
        this.licensingType = iosVppAppParameterValue?.licensingType instanceof VppLicensingTypeImpl? iosVppAppParameterValue?.licensingType:new VppLicensingTypeImpl(iosVppAppParameterValue?.licensingType);
        this.releaseDateTime = iosVppAppParameterValue?.releaseDateTime;
        this.totalLicenseCount = iosVppAppParameterValue?.totalLicenseCount;
        this.usedLicenseCount = iosVppAppParameterValue?.usedLicenseCount;
        this.vppTokenAccountType = iosVppAppParameterValue?.vppTokenAccountType;
        this.vppTokenAppleId = iosVppAppParameterValue?.vppTokenAppleId;
        this.vppTokenOrganizationName = iosVppAppParameterValue?.vppTokenOrganizationName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "applicableDeviceType": n => { this.applicableDeviceType = n.getObjectValue<IosDeviceTypeImpl>(createIosDeviceTypeFromDiscriminatorValue); },
            "appStoreUrl": n => { this.appStoreUrl = n.getStringValue(); },
            "bundleId": n => { this.bundleId = n.getStringValue(); },
            "licensingType": n => { this.licensingType = n.getObjectValue<VppLicensingTypeImpl>(createVppLicensingTypeFromDiscriminatorValue); },
            "releaseDateTime": n => { this.releaseDateTime = n.getDateValue(); },
            "totalLicenseCount": n => { this.totalLicenseCount = n.getNumberValue(); },
            "usedLicenseCount": n => { this.usedLicenseCount = n.getNumberValue(); },
            "vppTokenAccountType": n => { this.vppTokenAccountType = n.getEnumValue<VppTokenAccountType>(VppTokenAccountType); },
            "vppTokenAppleId": n => { this.vppTokenAppleId = n.getStringValue(); },
            "vppTokenOrganizationName": n => { this.vppTokenOrganizationName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.applicableDeviceType){
            writer.writeObjectValue<IosDeviceTypeImpl>("applicableDeviceType", new IosDeviceTypeImpl(this.applicableDeviceType));
        }
        if(this.appStoreUrl){
            writer.writeStringValue("appStoreUrl", this.appStoreUrl);
        }
        if(this.bundleId){
            writer.writeStringValue("bundleId", this.bundleId);
        }
        if(this.licensingType){
            writer.writeObjectValue<VppLicensingTypeImpl>("licensingType", new VppLicensingTypeImpl(this.licensingType));
        }
        if(this.releaseDateTime){
            writer.writeDateValue("releaseDateTime", this.releaseDateTime);
        }
        if(this.totalLicenseCount){
            writer.writeNumberValue("totalLicenseCount", this.totalLicenseCount);
        }
        if(this.usedLicenseCount){
            writer.writeNumberValue("usedLicenseCount", this.usedLicenseCount);
        }
        if(this.vppTokenAccountType){
            writer.writeEnumValue<VppTokenAccountType>("vppTokenAccountType", this.vppTokenAccountType);
        }
        if(this.vppTokenAppleId){
            writer.writeStringValue("vppTokenAppleId", this.vppTokenAppleId);
        }
        if(this.vppTokenOrganizationName){
            writer.writeStringValue("vppTokenOrganizationName", this.vppTokenOrganizationName);
        }
    };
}
