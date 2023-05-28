import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiBaseUrl } from "../constants";

const getDetails = (name: string) =>
  axios.get(`${apiBaseUrl}/pokemon/${name}`).then((res) => res.data);

const useFetchDetails = (name: string) =>
  useQuery({
    queryKey: ["pokemons", name],
    queryFn: () => getDetails(name),
  });

export default useFetchDetails;
