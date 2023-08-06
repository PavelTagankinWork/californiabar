import {California} from "./california/California";
import {Occasions} from "./occasions/Occasions";
import {Bar} from "./bar/Bar";
import {Disco} from "./disco/Disco";
import {Artgallery} from "./artgallery/Artgallery";
import {Location} from "./bar location/Location";

export const Catalog = () => {
	return (
		<main>
			<California/>
			<Occasions/>
			<Bar/>
			<Disco/>
			<Artgallery/>
			<Location/>
		</main>
	)
}