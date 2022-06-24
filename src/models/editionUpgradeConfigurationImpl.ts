import {EditionUpgradeConfiguration} from './editionUpgradeConfiguration';
import {EditionUpgradeLicenseType} from './editionUpgradeLicenseType';
import {DeviceConfigurationImpl} from './index';
import {Windows10EditionType} from './windows10EditionType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EditionUpgradeConfigurationImpl extends DeviceConfigurationImpl implements EditionUpgradeConfiguration {
    /** Edition Upgrade License File Content. */
    public license?: string | undefined;
    /** Edition Upgrade License Type. Possible values are: productKey, licenseFile, notConfigured. */
    public licenseType?: EditionUpgradeLicenseType | undefined;
    /** Edition Upgrade Product Key. */
    public productKey?: string | undefined;
    /** Edition Upgrade Target Edition. Possible values are: windows10Enterprise, windows10EnterpriseN, windows10Education, windows10EducationN, windows10MobileEnterprise, windows10HolographicEnterprise, windows10Professional, windows10ProfessionalN, windows10ProfessionalEducation, windows10ProfessionalEducationN, windows10ProfessionalWorkstation, windows10ProfessionalWorkstationN, notConfigured, windows10Home, windows10HomeChina, windows10HomeN, windows10HomeSingleLanguage, windows10Mobile, windows10IoTCore, windows10IoTCoreCommercial. */
    public targetEdition?: Windows10EditionType | undefined;
    /**
     * Instantiates a new EditionUpgradeConfiguration and sets the default values.
     * @param editionUpgradeConfigurationParameterValue 
     */
    public constructor(editionUpgradeConfigurationParameterValue?: EditionUpgradeConfiguration | undefined) {
        super(editionUpgradeConfigurationParameterValue);
        this.license = editionUpgradeConfigurationParameterValue?.license;
        this.licenseType = editionUpgradeConfigurationParameterValue?.licenseType;
        this.productKey = editionUpgradeConfigurationParameterValue?.productKey;
        this.targetEdition = editionUpgradeConfigurationParameterValue?.targetEdition;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "license": n => { this.license = n.getStringValue(); },
            "licenseType": n => { this.licenseType = n.getEnumValue<EditionUpgradeLicenseType>(EditionUpgradeLicenseType); },
            "productKey": n => { this.productKey = n.getStringValue(); },
            "targetEdition": n => { this.targetEdition = n.getEnumValue<Windows10EditionType>(Windows10EditionType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.license){
            writer.writeStringValue("license", this.license);
        }
        if(this.licenseType){
            writer.writeEnumValue<EditionUpgradeLicenseType>("licenseType", this.licenseType);
        }
        if(this.productKey){
            writer.writeStringValue("productKey", this.productKey);
        }
        if(this.targetEdition){
            writer.writeEnumValue<Windows10EditionType>("targetEdition", this.targetEdition);
        }
    };
}
