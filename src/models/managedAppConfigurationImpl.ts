import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {KeyValuePairImpl, ManagedAppPolicyImpl} from './index';
import {KeyValuePair} from './keyValuePair';
import {ManagedAppConfiguration} from './managedAppConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppConfigurationImpl extends ManagedAppPolicyImpl implements ManagedAppConfiguration {
    /** A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned by this service */
    private _customSettings?: KeyValuePair[] | undefined;
    /**
     * Instantiates a new ManagedAppConfiguration and sets the default values.
     * @param managedAppConfigurationParameterValue 
     */
    public constructor(managedAppConfigurationParameterValue?: ManagedAppConfiguration | undefined) {
        super(managedAppConfigurationParameterValue);
        this._customSettings = managedAppConfigurationParameterValue?.customSettings;
    };
    /**
     * Gets the customSettings property value. A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned by this service
     * @returns a KeyValuePairInterface
     */
    public get customSettings() {
        return this._customSettings;
    };
    /**
     * Sets the customSettings property value. A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned by this service
     * @param value Value to set for the customSettings property.
     */
    public set customSettings(value: KeyValuePair[] | undefined) {
        if(value) {
            const customSettingsArrValue: KeyValuePairImpl[] = [];
            this.customSettings?.forEach(element => {
                customSettingsArrValue.push((element instanceof KeyValuePairImpl? element:new KeyValuePairImpl(element)));
            });
            this._customSettings = customSettingsArrValue;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "customSettings": n => { this.customSettings = n.getCollectionOfObjectValues<KeyValuePairImpl>(createKeyValuePairFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.customSettings && this.customSettings.length != 0){        const customSettingsArrValue: KeyValuePairImpl[] = [];
        this.customSettings?.forEach(element => {
            customSettingsArrValue.push((element instanceof KeyValuePairImpl? element:new KeyValuePairImpl(element)));
        });
            writer.writeCollectionOfObjectValues<KeyValuePairImpl>("customSettings", customSettingsArrValue);
        }
    };
}
