import {createProxiedDomainFromDiscriminatorValue} from './createProxiedDomainFromDiscriminatorValue';
import {ProxiedDomainImpl} from './index';
import {ProxiedDomain} from './proxiedDomain';
import {WindowsInformationProtectionProxiedDomainCollection} from './windowsInformationProtectionProxiedDomainCollection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Windows Information Protection Proxied Domain Collection */
export class WindowsInformationProtectionProxiedDomainCollectionImpl implements WindowsInformationProtectionProxiedDomainCollection {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Display name */
    private _displayName?: string | undefined;
    /** Collection of proxied domains */
    private _proxiedDomains?: ProxiedDomain[] | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new windowsInformationProtectionProxiedDomainCollection and sets the default values.
     * @param windowsInformationProtectionProxiedDomainCollectionParameterValue 
     */
    public constructor(windowsInformationProtectionProxiedDomainCollectionParameterValue?: WindowsInformationProtectionProxiedDomainCollection | undefined) {
        this._additionalData = windowsInformationProtectionProxiedDomainCollectionParameterValue?.additionalData ? windowsInformationProtectionProxiedDomainCollectionParameterValue?.additionalData! : {};
        this._displayName = windowsInformationProtectionProxiedDomainCollectionParameterValue?.displayName;
        this._proxiedDomains = windowsInformationProtectionProxiedDomainCollectionParameterValue?.proxiedDomains;
    };
    /**
     * Gets the displayName property value. Display name
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Display name
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
            "proxiedDomains": n => { this.proxiedDomains = n.getCollectionOfObjectValues<ProxiedDomainImpl>(createProxiedDomainFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the proxiedDomains property value. Collection of proxied domains
     * @returns a ProxiedDomainInterface
     */
    public get proxiedDomains() {
        return this._proxiedDomains;
    };
    /**
     * Sets the proxiedDomains property value. Collection of proxied domains
     * @param value Value to set for the proxiedDomains property.
     */
    public set proxiedDomains(value: ProxiedDomain[] | undefined) {
        if(value) {
            const proxiedDomainsArrValue: ProxiedDomainImpl[] = [];
            this.proxiedDomains?.forEach(element => {
                proxiedDomainsArrValue.push((element instanceof ProxiedDomainImpl? element:new ProxiedDomainImpl(element)));
            });
            this._proxiedDomains = proxiedDomainsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.proxiedDomains && this.proxiedDomains.length != 0){        const proxiedDomainsArrValue: ProxiedDomainImpl[] = [];
        this.proxiedDomains?.forEach(element => {
            proxiedDomainsArrValue.push((element instanceof ProxiedDomainImpl? element:new ProxiedDomainImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ProxiedDomainImpl>("proxiedDomains", proxiedDomainsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
