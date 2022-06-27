import {createIosHomeScreenAppFromDiscriminatorValue} from './createIosHomeScreenAppFromDiscriminatorValue';
import {IosHomeScreenAppImpl} from './index';
import {IosHomeScreenApp} from './iosHomeScreenApp';
import {IosHomeScreenFolderPage} from './iosHomeScreenFolderPage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A page for a folder containing apps and web clips on the Home Screen. */
export class IosHomeScreenFolderPageImpl implements IosHomeScreenFolderPage {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A list of apps and web clips to appear on a page within a folder. This collection can contain a maximum of 500 elements. */
    public apps?: IosHomeScreenApp[] | undefined;
    /** Name of the folder page */
    public displayName?: string | undefined;
    /**
     * Instantiates a new iosHomeScreenFolderPage and sets the default values.
     * @param iosHomeScreenFolderPageParameterValue 
     */
    public constructor(iosHomeScreenFolderPageParameterValue?: IosHomeScreenFolderPage | undefined) {
        this.additionalData = iosHomeScreenFolderPageParameterValue?.additionalData ? iosHomeScreenFolderPageParameterValue?.additionalData! : {};
        const appsArrValue: IosHomeScreenAppImpl[] = []; iosHomeScreenFolderPageParameterValue.apps?.forEach(element => {appsArrValue.push(element instanceof IosHomeScreenAppImpl? element : new IosHomeScreenAppImpl(element));});
        this.apps = appsArrValue;
        this.displayName = iosHomeScreenFolderPageParameterValue?.displayName;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "apps": n => { this.apps = n.getCollectionOfObjectValues<IosHomeScreenAppImpl>(createIosHomeScreenAppFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.apps && this.apps.length != 0){        const appsArrValue: IosHomeScreenAppImpl[] = []; this.apps?.forEach(element => {appsArrValue.push(element instanceof IosHomeScreenAppImpl? element : new IosHomeScreenAppImpl(element));});
            writer.writeCollectionOfObjectValues<IosHomeScreenAppImpl>("apps", appsArrValue);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
